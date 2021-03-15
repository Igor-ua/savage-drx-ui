import React, {useEffect, useState} from 'react';
import 'date-fns';
import { withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {ThemeProvider} from "@material-ui/styles";
import ResponsiveSideBar from "./ResponsiveSideBar";
import {useStyles} from '../css/games-history-css.js'
import shortid from "shortid";
import API from "./Api";
import TableContainer from "@material-ui/core/TableContainer";
import Moment from "react-moment";
import {formatGameTime, getDateInSeconds, getWinner, getWorldImage} from "../utils/utils";
import GridList from '@material-ui/core/GridList';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import MapResult from "./MapResult";
import {defaultTheme} from "../utils/theme";
import {ONE_DAY_SECONDS} from "../utils/constants";


const buildDailyMapInfo = (data, selectionHandler, classes) => {
    return data.map((result) => {
        return <GridListTile key={shortid.generate()}>
            <img alt={result.game.map_name}
                 src={getWorldImage(result.game.map_name)}
                 className={classes.worldImage}
            />
            <GridListTileBar
                titlePosition="top"
                actionIcon={
                    <Button variant="contained" size="small" color="primary" onClick={() => {
                        selectionHandler(result.timestamp);
                    }}>
                        SHOW
                    </Button>
                }
                actionPosition="right"
                className={classes.titleBar}
            />

            <GridListTileBar
                subtitle={getTableResults(result, classes)}
                className={classes.titleBarBottom}
            />
        </GridListTile>
    });
}

const getTableResults = (result, classes) => {
    return <TableContainer className={classes.tableContainer}>
        <table className={classes.table}>
            <thead/>
            <tbody>
            <tr key={shortid.generate()}>
                <td align="left">Map</td>
                <td align="left">{result.game.map_name}</td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="left">Finished</td>
                <td align="left"><Moment unix format="ddd HH:mm:ss">{result.timestamp}</Moment></td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="left">Duration</td>
                <td align="left">{formatGameTime(result.game.game_time)}</td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="left">Winner</td>
                <td align="left">{getWinner(result.winner)}</td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="left">Online</td>
                <td align="left" style={{color: '#55ffef'}}>{result.game.online}</td>
            </tr>
            </tbody>
        </table>
    </TableContainer>
}


const GameHistory = (props) => {
    const classes = props.classes;
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    const [selectedDate, setSelectedDate] = React.useState(today);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            // Test local data:
            // const result = await API.get(`/stats/results/1612303200/1612389600`);

            const dateInSeconds = getDateInSeconds(selectedDate);
            const result = await API.get(`/stats/results/${dateInSeconds}/${dateInSeconds + ONE_DAY_SECONDS}`);
            setData(result.data);
            if (result.data && result.data[0]) {
                setSelectedWorldTimestamp(result.data[0].timestamp);
            } else {
                setSelectedWorldTimestamp(0);
                setWorld([]);
            }
        })()
    }, [selectedDate])

    const [selectedWorldTimestamp, setSelectedWorldTimestamp] = useState(0);
    const [world, setWorld] = useState([]);
    useEffect(() => {
        (async () => {
            if (selectedWorldTimestamp !== 0) {
                const result = await API.get(`/stats/result/${selectedWorldTimestamp}`);
                setWorld(result.data);
            }
        })()
    }, [selectedWorldTimestamp]);

    return <div className={classes.root}>
        <CssBaseline/>
        <ThemeProvider theme={defaultTheme}>
            <ResponsiveSideBar/>
            <main className={classes.content}>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item xl={12}>
                        <div className={classes.datePickerWrapper} color="primary">
                            <MuiPickersUtilsProvider utils={DateFnsUtils} color="primary">
                                <KeyboardDatePicker
                                    disableToolbar
                                    format="yyyy MMM dd"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    color="primary"
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </Grid>
                    <Grid item xl={12}>
                        <GridList className={classes.gridList} cols={5.5}>
                            {buildDailyMapInfo(data, setSelectedWorldTimestamp, classes)}
                        </GridList>
                    </Grid>
                </Grid>
                {
                    world.length > 0 ? <div className={classes.resultsWrapper}>
                                <MapResult world={world}/>
                            </div>
                        : null
                }
            </main>
        </ThemeProvider>
    </div>
}

export default withStyles(useStyles)(GameHistory)
