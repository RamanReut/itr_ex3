const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const db = require('sequelize');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const dbConnect = new db.Sequelize(process.env.DATABASE_URL);

server.listen(process.env.PORT);

const User = dbConnect.import('./models/user');
const Message = dbConnect.import('./models/message');
User.sync();
Message.sync();
User.findOrCreate({ user: 'init'});
Message.findOrCreate({ author: 1, text: 'test'});

app.use(express.static('./build'));

async function getDBInitMessages() {
    const dbMessages = await Message.findAll({
        limit: 20,
        order: [['id', 'DESC']]
    });
    return dbMessages;
}

function dbMessagesToMessages(dbMessage) {
    return {
        authorUserID: dbMessage.dataValues.author,
        text: dbMessage.dataValues.text,
    }
}

async function getInitMessages() {
    let messages ={};
    (await getDBInitMessages()).forEach(
        elem => 
            messages[elem.dataValues.id] = dbMessagesToMessages(elem));
    return messages;
}

function getUsernameFromDBUser(dbUser) {
    return dbUser.dataValues.username
}

async function getDBUserByID(id) {
    return await User.findByPk(id);
}

async function getUsernamesByIDs(ids) {
    let usernames = {};
    for (let i=0; i<ids.length; i++) {
        let user = await getDBUserByID(ids[i]);
        usernames[ids[i]] = getUsernameFromDBUser(user);
    }
    return usernames;
}

async function getUsernamesByMessages(messages) {
    let ids = new Set;
    Object.keys(messages).forEach(key => {
        ids.add(messages[key].authorUserID);
    })
    return getUsernamesByIDs([...ids]);
}

async function initData() {
    const messages = await getInitMessages();
    const usernames = await getUsernamesByMessages(messages);
    return { messages: messages, usernames: usernames }
}

async function newUserID() {
    const user = await User.create({username: 'Anonimus'});
    broadcastUser(user.dataValues.id, user.dataValues.username);
    return { id: user.dataValues.id };
}

app.get('/api/newUserID', (req, resp) => {
    newUserID().then(value => resp.json(value));
});

app.get('/api/initData', (req, resp) => {
    initData().then(data => resp.json(data));
});

function broadcastMessage(messageID, authorID, text, authorUsername) {
    io.emit('message', {
        authorID: authorID,
        messageID: messageID,
        text: text,
        authorUsername: authorUsername,
    });
}

function broadcastDeleteMessage(messageID) {
    io.emit('delete message', {
        id: messageID,
    });
}

function broadcastUser(id, username) {
    io.emit('user', {id: id, username: username});
}

async function changeUsername(id, username) {
    let user = await User.findByPk(id);
    user.username = username;
    user.save();
}

async function newMessage(authorID, text) {
    return (await Message.create({author: authorID, text: text})).id;
}

async function changeMessage(messageID, authorID, text) {
    let message = await Message.findByPk(messageID);
    if(message.author == authorID) {
        message.text = text;
        message.save();
        return true;
    } 
    return false;
}

async function deleteMessage(userID, messageID) {
    let message = await Message.findByPk(messageID);
    if (message.author = userID) {
        message.destroy();
        return true;
    }
    return false;
}

async function registrateMessage(messageID, authorID, text) {
    let id = 0;
    if(messageID === 'new') {
        id = await newMessage(authorID, text);
    } else {
        if(await changeMessage(messageID, authorID, text)) {
            id = messageID;
        }
    }
    if (id != 0) {
        const username = await getUsernamesByIDs([authorID]);
        broadcastMessage(id, authorID, text, username[authorID]);
    };
}

io.on('connection', (socket) => {
    socket.on('message', value => {
        registrateMessage(value.messageID, value.userID, value.message);
    });
    socket.on('username', value => {
        changeUsername(value.id, value.username);
        broadcastUser(value.username);
    });
    socket.on('delete message', value => {
        if(deleteMessage(value.userID, value.messageID)) {
            broadcastDeleteMessage(value.messageID);
        }
    });
});