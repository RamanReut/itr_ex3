import React, { useState, useCallback, useEffect, useRef } from 'react';
import Username from './components/username/username';
import MessageList from './components/messageList/messageList';
import MessageInput from './components/messageInput/messageInput';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import chat from './services/chat';
import cookies from 'js-cookie';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        overflow: 'hidden',
    },
    messageListWrapper: {
        flexGrow: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        marginTop: theme.spacing(),
        marginBottom: theme.spacing()
    },
    fullHeight: {
        height: '100%',
    },
    gridWrapper: {
        boxShadow: theme.shadows[4]
    },

}));

function App() {
    const styles = useStyles();

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [usernames, setUsernames] = useState({});
    const [usernameWidgetType, setUsernameWidgetType] = useState('label');
    const [messageID, setMessageID] = useState('new');
    const [userID, setUserID] = useState(0);
    const socket = useRef();

    const handleSetUserID = useCallback((id) => {
        setUserID(id);
        cookies.set('userID', id, { expires: 90 });
    }, [])

    const applyUsername = useCallback(
        () => {
            usernames[userID] = username;
            setUsernameWidgetType('label');
            socket.current.changeUsername(userID, username);
        }, [usernames, userID, username]
    );

    const onEditButtonClick = useCallback(
        () => {
            setUsernameWidgetType('edit');
        }, [setUsernameWidgetType]
    );

    const onUsernameButtonClick = useCallback(
        (event) => {
            if (usernameWidgetType === 'edit') {
                return applyUsername(event)
            }
            return onEditButtonClick(event)
        }, [applyUsername, onEditButtonClick, usernameWidgetType]
    );

    const handleMessageEdit = useCallback((id) => {
        setMessage(messages[id].text);
        setMessageID(id);
    }, [messages]);

    const handleMessageDelete = useCallback((id) => {
        socket.current.deleteMessage(id, userID);
    }, [userID]);

    const onNewUser = useCallback((id, username) => {
        setUsernames({ ...usernames, [id]: username });
    }, [usernames]);

    const handleSendMessage = useCallback(() => {
        socket.current.sendMessage(userID, messageID, message);
        setMessage('');
        setMessageID('new');
    }, [userID, messageID, message]);

    const onMessageDelete = useCallback((id) => {
        let {[id]: _, ...newMessages} = messages;
        setMessages(newMessages);
    }, [messages]);

    const onNewMessage = useCallback((messageID, authorID, text, username) => {
        setMessages({ 
            ...messages, 
            [messageID]: {
                authorUserID: authorID,
                text: text,
            }});
        setUsernames({...usernames, [authorID]: username})
    }, [messages, usernames]);

    useEffect(() => {
        socket.current = new chat();
    }, []);

    useEffect(() => {
        const id = cookies.get('userID');
        if (!id) {
            socket.current.requestUserID(handleSetUserID);
            setUsername('Anonimus');
        } else {
            setUserID(id);
            setUsername(usernames[id]);
        }
    }, [handleSetUserID, usernames]);

    useEffect(() => {
        setUsername(usernames[userID]);
    }, [usernames, userID]);

    useEffect(() => {
        socket.current.requestInitData((messages, usernames) => {
            setMessages(messages);
            setUsernames(usernames);
        })
    }, [])

    useEffect(() => {
        socket.current.subscribeNewUsers(onNewUser);
        socket.current.subscribeNewMessage(onNewMessage);
        socket.current.subscribeDeleteMessage(onMessageDelete);
    }, [onNewUser, onNewMessage, onMessageDelete]);

    return (
        <div className={classNames("App", styles.root)}>
            <Container
                className={classNames(styles.fullHeight)}
                maxWidth='md'
            >
                <Box className={classNames(styles.fullHeight, styles.gridWrapper)}>
                    <Grid
                        container
                        direction='column'
                        className={styles.fullHeight}
                        wrap='nowrap'
                        spacing={0}
                    >
                        <Grid item>
                            <Username
                                username={username}
                                type={usernameWidgetType}
                                onChange={event => setUsername(event.target.value)}
                                onButtonClick={onUsernameButtonClick}
                            />
                        </Grid>
                        <Grid
                            item
                            className={styles.messageListWrapper}
                            xs={12}
                            container
                            direction='column-reverse'
                        >
                            <Container>
                                <MessageList
                                    messages={messages}
                                    usernames={usernames}
                                    userID={userID}
                                    onMessageDelete={handleMessageDelete}
                                    onMessageEdit={handleMessageEdit}
                                />
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container>
                                <MessageInput
                                    message={message}
                                    onChange={setMessage}
                                    onClick={handleSendMessage}
                                />
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default App;