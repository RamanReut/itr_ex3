import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    label: {
        ...theme.typography.h4,
        color: theme.palette.primary.contrastText,
    },
    icon: {
        color: theme.palette.primary.contrastText,
    }
}));

export default function LabelWithEditButton({
    value,
    onButtonClick,
    mainXS = 3,
}) {
    const styles = useStyles();

    return (
        <Grid 
            container
            justify='flex-start'
            alignItems='center'
            spacing={0}
        >
            <Grid
                container
                item 
                xs={mainXS}
                justify='flex-start'
                alignItems='center'
            >
                <div className={styles.label}>{value}</div>
            </Grid>
            <Grid item xs={1}>
                <IconButton 
                    className={styles.icon}
                    onClick={onButtonClick}
                >
                    <EditIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}