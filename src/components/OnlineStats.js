import React, {Component} from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import API from './Api';
import {ThemeProvider} from "@material-ui/styles";
import ResponsiveSideBar from "./ResponsiveSideBar";
import {useStyles} from '../css/online-stats-css'
import WeeklyChart from "./WeeklyChart";
import DailyChart from "./DailyChart";


const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
});

class OnlineStats extends Component {

    constructor(props) {
        super(props);
        this.getWeeklyOnline().then(result =>
            this.setState({
                weekly: result.data
            })
        );
        this.getDailyOnline().then(result =>
            this.setState({
                daily: result.data
            })
        );
    }

    async getWeeklyOnline() {
        return await API.get(`stats/online/weekly`);
    }

    async getDailyOnline() {
        return await API.get(`stats/online/daily`);
    }


    render() {
        const {classes} = this.props;



        return <div className={classes.root}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <ResponsiveSideBar/>
                <main className={classes.content}>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        <Grid item xl={12}>
                            {this.state?.weekly ? <WeeklyChart weekly={this.state.weekly}/> : null}
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        <Grid item xl={12}>
                            {this.state?.daily ? <DailyChart daily={this.state.daily}/> : null}
                        </Grid>
                    </Grid>
                </main>
            </ThemeProvider>
        </div>
    }
}

export default withStyles(useStyles)(OnlineStats)
