import React, {Component} from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import API from './Api';
import Online from "./Online"
import Latest from "./Latest"
import {ThemeProvider} from "@material-ui/styles";
import ResponsiveSideBar from "./ResponsiveSideBar";
import {useStyles} from '../css/main-css'


const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.getOnline().then(online =>
            this.setState({
                online: online.data
            })
        )
        this.getLatestResults().then(latest =>
            this.setState({
                latest: latest.data
            })
        )
    }

    async getOnline() {
        return await API.get(`stats/online`);
    }

    async getLatestResults() {
        return await API.get(`stats/results/5`);
    }


    render() {
        const {classes} = this.props;

        return <div className={classes.root}>
            <CssBaseline/>

            <ThemeProvider theme={theme}>
                <ResponsiveSideBar/>
                <main className={classes.content}>
                    <Grid container spacing={3} className={classes.gridContainer}>
                        <Grid item xl={7} className={classes.latest}>
                            {this.state?.latest ? <Latest latest={this.state.latest}/> : null}
                        </Grid>
                        <Grid item xl={5} className={classes.online}>
                            {this.state?.online ? <Online data={this.state.online}/> : null}
                        </Grid>
                    </Grid>
                </main>
            </ThemeProvider>

        </div>
    }


}

export default withStyles(useStyles)(Main)
