import React from 'react';
import Grid from '@material-ui/core/Grid';
import LightTextField from '../lightTextField/lightTextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    lightButton: {
        color: theme.palette.primary.contrastText,
    }
}));

export default function TextFieldWithButton({
    onChange,
    onButtonClick,
    value,
    buttonText,
    mainXS = 3
}) {
    const styles = useStyles();

    return (
        <Grid 
            container
            justify='flex-start'
            alignItems='center'
            spacing={0}
        >
            <Grid item xs={mainXS}>
                <LightTextField 
                    value={value}
                    onChange={onChange}
                />
            </Grid>
            <Grid item xs={1}>
                <Button 
                    className={styles.lightButton}
                    onClick={onButtonClick}
                    fullWidth
                >{buttonText}</Button>
            </Grid>
        </Grid>
    )
}