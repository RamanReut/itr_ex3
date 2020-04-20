import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    lightTextField: {
        '& input': {
            color: theme.palette.secondary.contrastText,
        }
    },
}));

export default function LightTextField({
    value,
    onChange,
}) {
    const styles = useStyles();

    return (
        <TextField 
            variant='filled'
            className={styles.lightTextField}
            color='secondary'
            onChange={onChange}
            value={value}
            size='medium'
        />
    )
}