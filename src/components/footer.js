import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Paper } from "@material-ui/core";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#3f51b5",
        color: "white",
        borderRadius: 0
    }
}));

export default function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                   <Paper className={classes.paper}><a href="https://docs.google.com/forms/d/1PBKcix4n69oMGIMELuRSZFX5QsDtWPKIMHZeasvc_4Y/edit">F.A.Q</a></Paper>
                </Grid>
                <Grid item xs={4}>
                   <Paper className={classes.paper}><a href="https://www.cnil.fr/fr/rgpd-exemples-de-mentions-dinformation">Mentions légales</a></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><a href="mailto:eventinparis@yahoo.fr">Nous contacter</a></Paper>
                   
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>MSD - Copyright 2021</Paper>
                </Grid>
            
            </Grid>         


        </div>
    );
}