import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SideBar from "./SideBar"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#282c34'
    },
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    }
}));

export default function ResultsDrawer() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <SideBar/>

            <main className={classes.content}>
                <Toolbar/>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </Grid>
            </main>

        </div>
    );
}
