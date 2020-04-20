import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
    box: {
        borderRadius: '5px'
    }
})

export default function RoundedBox({
    children,
    className,
}) {
    const styles = useStyles();

    return (
        <Box className={classNames(className, styles.box)}>
            {children}
        </Box>
    )
}