import React, {Component} from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import API from './Api';
import SideBar from "./SideBar"
import Online from "./Online"
import Latest from "./Latest"
import {ThemeProvider} from "@material-ui/styles";

const useStyles = theme => ({
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
        marginTop: theme.spacing(2)
    }
});

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
        console.log('render this.state: ', this.state)
        const {classes} = this.props;

        if (this.state?.latest) {
            console.log('Main latest: ', this.state.latest)
        }

        return <div className={classes.root}>
            <CssBaseline/>

            <ThemeProvider theme={theme}>
                <SideBar/>
                <main className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid item xl={7}>
                            {this.state?.latest ? <Latest latest={this.state.latest}/> : null}
                        </Grid>
                        <Grid item xl={5}>
                            {this.state?.online ? <Online data={this.state.online}/> : null}
                        </Grid>
                    </Grid>
                </main>
            </ThemeProvider>

        </div>
    }


}

export default withStyles(useStyles)(Main)
