import React from 'react';
import Grid from '@material-ui/core/Grid';
import Message from '../message/message';

function withGridItem(Component) {
    return function (props) {
        const justify = ({ user: 'flex-end', other: 'flex-start' })[props.type];

        return (
            <Grid
                item
                xs={12}
            >
                <Grid
                    container
                    direction='row'
                    justify={justify}
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <Grid
                            container
                            direction='row'
                            justify={justify}
                        >
                            <Grid item>
                                <Component {...props} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
const Item = withGridItem(Message);

export default function MessageList({
    usernames,
    userID,
    messages,
    onMessageEdit,
    onMessageDelete,
}) {
    const generateItem = (key) => {
        const authorID = messages[key].authorUserID
        const messageType = (userID == authorID) ? 'user' : 'other';

        return <Item
            key={key}
            type={messageType}
            message={messages[key].text}
            username={usernames[authorID]}
            onMessageEdit={() => onMessageEdit(key)}
            onMessageDelete={() => onMessageDelete(key)}
        />
    }

    return (
        <Grid
            container
            spacing={1}
            direction='column'
            wrap='nowrap'
        >
            {Object.keys(messages).sort((a, b) => a-b).map(generateItem)}
        </Grid>
    )
}