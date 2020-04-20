import React from 'react';
import Grid from '@material-ui/core/Grid';
import RoundedBox from '../roundedBox/roundedBox';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames'

const useStyles = makeStyles({
    message: {
        paddingBottom: '0.2em',
    },
    userMessage: {
        backgroundColor: '#e8e8e8',
    },
    otherMessage: {
        backgroundColor: '#b5ceff',
    }
});

export default function MessageBox({
    children,
    type,

}) {
    const styles = useStyles();

    return (
        <Grid 
            container
        >
            <Grid item>
                <RoundedBox className={classNames(styles[type+'Message'], styles.message)}>
                    <Container>
                        {children}
                    </Container>
                </RoundedBox>
            </Grid>
        </Grid>
    )
}