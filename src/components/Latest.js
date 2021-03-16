import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import shortid from 'shortid';
import Moment from 'react-moment';
import {useStyles} from '../css/latest-css'
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {formatGameTime, getTeamName, getWinner, getWorldImage, sortCommanders} from "../utils/utils";
import {CLAN_ICON_URL} from "../utils/constants";

const buildTableLatest = (game, upperIndex, classes) => {
    const getRowsA = (game) => {
        const t1 = sortCommanders(game.teams[1].players);
        const t2 = sortCommanders(game.teams[2].players);
        const maxSize = Math.max(t1?.length || 0 , t2?.length || 0);

        let result = []
        for (let i = 0; i < maxSize; i++) {
            result.push(
                <tr key={shortid.generate()}>
                    {getCell(t1[i], i)}
                    {getCell(t2[i], i)}
                </tr>
            )
        }
        return result;
    }

    const getRowsB = (game) => {
        const t3 = game.teams[3] ? sortCommanders(game.teams[3].players) : null;
        const t4 = game.teams[4] ? sortCommanders(game.teams[4].players) : null;
        const specs = sortCommanders(game.teams[0].players);
        const maxSize = Math.max(t3?.length || 0, t4?.length || 0, specs?.length || 0);

        let result = []
        for (let i = 0; i < maxSize; i++) {
            result.push(
                <tr key={shortid.generate()}>
                    {t3 ? getCell(t3[i], i) : null}
                    {t4 ? getCell(t4[i], i) : null}
                    {getCell(specs[i], i)}
                </tr>
            )
        }
        return result;
    }

    const getCell = (player, index) => {
        if (!player) {
            return <td className={upperIndex % 2 ? classes.emptyTDB : classes.emptyTDA}></td>;
        }

        return <td>
            <div className={classes.tdInnerDiv}>
                <span style={{paddingRight: '5px', color: 'grey'}}>{index + 1}</span>
                <span>
                    {player.is_commander ? <Avatar alt={player.name} src={'/public/user-24.png'} variant="rounded"
                                               className={classes.clanIconLatest}/> : null }
                </span>
                <span>
                    {player.clan_id !== 0 ? <Avatar alt={player.name} src={CLAN_ICON_URL + player.clan_id + '.png'}
                                                    variant="rounded" className={classes.clanIconLatest}/> : null }
                </span>
                <span className={classes.playersLeft}>{player.name}</span>
            </div>
        </td>
    }


    return <TableContainer className={classes.latestTableWrapper}>
        <table className={upperIndex % 2 ? classes.tablePlayersB : classes.tablePlayersA} style={{tableLayout: 'fixed'}}>
            <thead>
            <tr>
                <th>
                    {getTeamName(game.teams[1].team_id, game.teams[1].team_name, game.teams[1].race)}
                </th>
                <th>
                    {getTeamName(game.teams[2].team_id, game.teams[2].team_name, game.teams[2].race)}
                </th>
            </tr>
            </thead>
            <tbody>
                {getRowsA(game)}
            </tbody>
        </table>
        <table className={upperIndex % 2 ? classes.tablePlayersB : classes.tablePlayersA}>
            <thead>
            <tr>
                {game.teams[3] ?
                    <th>
                        {getTeamName(game.teams[3].team_id, game.teams[3].team_name, game.teams[3].race)}
                    </th> : null}
                {game.teams[4] ? <th>Team 4</th> : null}
                <th>Spectators</th>
            </tr>
            </thead>
            <tbody>
                {getRowsB(game)}
            </tbody>
        </table>
    </TableContainer>
}

const getTableResults = (result, index, classes) => {
    return <TableContainer className={classes.tableContainer}>
        <table className={index % 2 ? classes.tableB : classes.tableA}>
            <thead/>
            <tbody>
            <tr key={shortid.generate()}>
                <td align="right">Map</td>
                <td align="left">{result.game.map_name}</td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="right">Finished</td>
                <td align="left"><Moment unix format="ddd HH:mm:ss">{result.timestamp}</Moment></td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="right">Game Time</td>
                <td align="left">{formatGameTime(result.game.game_time)}</td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="right">Winner</td>
                <td align="left">{getWinner(result.winner)}</td>
            </tr>
            <tr key={shortid.generate()}>
                <td align="right">Online</td>
                <td align="left">{result.game.online}</td>
            </tr>
            </tbody>
        </table>
    </TableContainer>
}


const Latest = (props) => {
    const classes = props.classes;
    let history = useHistory();

    const handleResult = value => {
        history.push({
            pathname: `/result/${value}`
        });
    };

    return <div className={classes.root}>
        <Grid container>
            <Grid item xs={12} className={classes.header}>
                History
            </Grid>
            {props.latest.slice(0).reverse().map((result, index) => {
                return <Grid container key={shortid.generate()}
                             className={index % 2 ? classes.resultsContainerB : classes.resultsContainerA}>
                    <Grid item xl={6} lg={6} className={classes.gridWorld}>
                        <div className={classes.imageWrapper}>
                            <img alt={result.game.map_name}
                                 src={getWorldImage(result.game.map_name)}
                                 className={classes.latestWorld}
                            />
                        </div>

                        <div>
                            {getTableResults(result, index, classes)}
                        </div>
                    </Grid>

                    <Grid item xl={6} lg={6}>
                        {buildTableLatest(result.game, index, classes)}
                    </Grid>
                    <Grid item xl={12} xs={12} className={classes.buttonWrapper}>
                        <Button variant="contained" size="small" color="primary" onClick={() => {
                            handleResult(result.timestamp);
                        }}>
                            MAP STATS
                        </Button>
                    </Grid>
                </Grid>
            })
            }
        </Grid>
    </div>
}

export default withStyles(useStyles)(Latest)