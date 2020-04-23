import React, { useState, useCallback } from 'react';
import MessageBox from '../messageBox/messageBox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Menu from '../messageMenu/messageMenu';
import { makeStyles } from '@material-ui/core/styles';
import showdown from 'showdown';
import MessageConverter from '../messageConverter/messageConverter';
import ReactMarkdown from 'react-markdown';
import { toArray } from 'react-emoji-render';

const converter = new showdown.Converter();


const useStyles = makeStyles((theme) => ({
    label: {
        color: theme.palette.primary.main,
        marginBottom: '0.4em',
    },
    message: {
        '& p': {
            marginTop: '0.1em',
            marginBottom: '0.1em',
            textAlign: 'left',
        },
    },
}));

export default function Message({
    type,
    message,
    username,
    onMessageEdit,
    onMessageDelete,
}) {
    const styles = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleContextMenu = useCallback((event) => {
        if (type === 'user') {
            setAnchorEl(event.currentTarget);
        }
        event.preventDefault();
    }, [type]);
    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <Box onContextMenu={handleContextMenu}>
            <MessageBox
                type={type}
            >
                <Grid
                    container
                    direction='column'
                    alignItems='flex-start'
                >
                    <Grid item>
                        <div className={styles.label}>{username}</div>
                    </Grid>
                    <Grid
                        item
                        className={styles.message}
                    >
                        <MessageConverter text={message}/>
                    </Grid>
                </Grid>
            </MessageBox>
            <Menu
                anchorEl={anchorEl}
                onDelete={onMessageDelete}
                onEdit={onMessageEdit}
                onClose={handleMenuClose}
            />
        </Box>
    )
}