import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBar from "./SideBar"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#282c34'
    },
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        // width: '100%',
        // overflow: 'auto',
        // overflowY: 'auto',
        // overflowX: 'auto'
    }
}));

export default function MainDrawer() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <CssBaseline/>
            <SideBar/>

            <main className={classes.content}>
                <Toolbar/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </main>

        </div>
    );
}
