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
        paddingBottom: theme.spacing(3)
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
    }

    async getOnline() {
        return await API.get(`stats/online`);
    }


    render() {
        const {classes} = this.props;

        return <div className={classes.root}>
            <CssBaseline/>

            <ThemeProvider theme={theme}>
                <SideBar/>
                <main className={classes.content}>
                    <Toolbar/>
                    <Grid container spacing={3}>
                        <Grid item xs={7}>
                            {this.state && this.state.online ? <Latest data={this.state.online}/> : null}
                        </Grid>
                        <Grid item xs={5}>
                            {this.state && this.state.online ? <Online data={this.state.online}/> : null}
                        </Grid>
                    </Grid>
                </main>
            </ThemeProvider>

        </div>
    }


}

export default withStyles(useStyles)(Main)
