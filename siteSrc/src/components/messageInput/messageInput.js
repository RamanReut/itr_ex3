import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import ReactMde from 'react-mde';
import "react-mde/lib/styles/css/react-mde-all.css";
import { makeStyles } from '@material-ui/core/styles';
import MessageConverter from '../messageConverter/messageConverter';

const useStyles = makeStyles({
    textArea: {
        height: '100px',
    },
    preview: {
        height: '100px',
    },
});

export default function MessageInput({
    message,
    onClick,
    onChange,
}) {
    var styles = useStyles();
    var [ selectedTab, useSelectedTab ] = useState('write');

    return (
        <Grid
            container
            alignItems='center'
        >
            <Grid item xs={11}>
                <ReactMde 
                    value={message}
                    onChange={onChange}
                    classes={styles}
                    selectedTab={selectedTab}
                    onTabChange={useSelectedTab}
                    generateMarkdownPreview={markdown => {
                        return Promise.resolve(<MessageConverter text={markdown} />)
                    }}
                    minPreviewHeight={100}
                    maxEditorHeight={200}
                    minEditorHeight={100}
                    textAreaProps={{autoFocus: true}}
                />
            </Grid>
            <Grid item xs>
                <IconButton
                    color='primary'
                    onClick={onClick}
                >
                    <SendIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}