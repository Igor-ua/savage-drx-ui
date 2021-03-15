import React, {useEffect, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from "@material-ui/styles";
import ResponsiveSideBar from "./ResponsiveSideBar";
import {useStyles} from '../css/map-result-wrapper-css.js'
import API from "./Api";
import MapResult from "./MapResult";
import {defaultTheme} from "../utils/theme";

const MapResultWrapper = (props) => {
    const classes = props.classes;
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API.get(`/stats/result/${props.match.params.timestamp}`);
            setData(result.data);
        })()
    }, [])

    return <div className={classes.root}>
        <CssBaseline/>
        <ThemeProvider theme={defaultTheme}>
            <ResponsiveSideBar/>
            <main className={classes.content}>
                <MapResult world={data}/>
            </main>
        </ThemeProvider>
    </div>
}

export default withStyles(useStyles)(MapResultWrapper)
