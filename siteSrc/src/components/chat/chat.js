import React, { useState, useCallback, useEffect } from 'react';
import Username from './components/username/username';
import MessageList from './components/messageList/messageList';
import MessageInput from './components/messageInput/messageInput';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { usernames, userID, messages } from './constants';
import classNames from 'classnames'
import * as chat from './services/chat';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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

export default function Chat() {
    const styles = useStyles();

    const [ username, setUsername ] = useState(usernames[userID]);
    const [ message, setMessage ] = useState('');
    const [ usernameWidgetType, setUsernameWidgetType ] = useState('label');
    const [ messageID, setMessageID ] = useState('new');

    const applyUsername = useCallback(
        () => {
            usernames[userID] = username;
            setUsernameWidgetType('label');
        }, [username, setUsernameWidgetType]
    );

    const onEditButtonClick = useCallback(
        () => {
            setUsernameWidgetType('edit');
        }, [setUsernameWidgetType]
    );

    const onUsernameButtonClick = useCallback(
        (event) => {
            if(usernameWidgetType === 'edit') {
                return applyUsername(event)
            }
            return onEditButtonClick(event)
        }, [applyUsername, onEditButtonClick, usernameWidgetType]
    );

    const handleMessageEdit = useCallback((id) => {
        setMessage(messages[id].text);
        setMessageID(id);
    }, []);

    const handleMessageDelete = useCallback((id) => {
        chat.deleteMessage(id);
    }, []);

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
                                />
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    );
}