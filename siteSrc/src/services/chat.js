import socketIO from 'socket.io-client';

export default class socket {
    socket = {};
    __handleNewMessage = () => {};
    __handleNewUser = () => {};
    __handleDeleteMessage = () => {};

    constructor () {
        this.socket = socketIO.connect('ws://arcane-thicket-60613.herokuapp.com/socket.io/?EIO=4&transport=websocket');
        this.socket.on('message', this.handleNewMessage.bind(this));
        this.socket.on('user', this.handleNewUser.bind(this));
        this.socket.on('delete message', this.handleDeleteMessage.bind(this));
    }

    subscribeNewMessage(callback = function(messageID, text) {}) {
        this.__handleNewMessage = callback;
    }

    subscribeNewUsers(callback = function(userID, username){}) {
        this.__handleNewUser = callback;
    }

    subscribeDeleteMessage(callback = function(messageID) {}) {
        this.__handleDeleteMessage = callback;
    }

    handleNewMessage({ messageID, authorID, text, authorUsername }) {
        this.__handleNewMessage(messageID, authorID, text, authorUsername);
    }

    handleNewUser({ id, username }) {
        this.__handleNewUser(id, username);
    }

    handleDeleteMessage({ id }) {
        this.__handleDeleteMessage(id);
    }

    requestUserID(callback = function() {}) {
        fetch('/api/newUserID').then(response => {
            if(response.ok) {
                response.json().then(value => {
                    callback(value.id);
                })
            }
        });
    }

    requestInitData(callback = function(messages, usernames){}) {
        fetch('/api/initData').then((response) => {
            if(response.ok) {
                response.json().then(value => {
                    callback(value.messages, value.usernames);
                })
            }
        });
    }

    sendMessage(userID, messageID, message) {
        this.socket.emit('message', {
            userID: userID,
            messageID: messageID, 
            message: message,
        });
    }

    deleteMessage(id, userID) {
        this.socket.emit('delete message', {
            messageID: id,
            userID: userID,
        });
    }

    changeUsername(id, username) {
        this.socket.emit('username', {
            id: id,
            username: username,
        })
    }
}