import React, {Component} from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import API from './Api';
import {ThemeProvider} from "@material-ui/styles";
import ResponsiveSideBar from "./ResponsiveSideBar";
import {useStyles} from '../css/map-stats-css'
import DailyMapsComponent from "./DailyMapsComponent";


const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
});

class MapStats extends Component {

    constructor(props) {
        super(props);
        this.getResultsPerDay(1612310087, 1612314087).then(result =>
            this.setState({
                daily: result.data
            })
        );
    }

    async getResultsPerDay(from, to) {
        return await API.get(`/stats/results/${from}/${to}`);
    }

    render() {
        const {classes} = this.props;

        return <div className={classes.root}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <ResponsiveSideBar/>
                <main className={classes.content}>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        <Grid item xl={6}>
                            {this.state?.daily ? <DailyMapsComponent daily={this.state.daily}/> : null}
                        </Grid>
                        <Grid item xl={6} className={classes.online}>
                        </Grid>
                    </Grid>
                </main>
            </ThemeProvider>
        </div>
    }
}

export default withStyles(useStyles)(MapStats)
