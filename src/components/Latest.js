import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import shortid from 'shortid';
import Moment from 'react-moment';
import {useStyles} from '../css/latest-css'

const getWinner = (id) => {
    if (id === 0) {
        return 'Draw'
    }
    if (id === 1) {
        return 'Human'
    }
    if (id === 2) {
        return 'Beast'
    }
}

const getTeamName = (teamId, teamName, race) => {
    if (teamId === 0) {
        return `Spectators`
    }
    if (teamId === 1) {
        return `Team1 Human`
    }
    if (teamId === 2) {
        return `Team2 Beast`
    }
}

const makeLatestGrid = (teamNumber, game, classes, index) => {
    const clanIconUrl = './public/cached/icondir/'
    const players = [...game.teams[teamNumber].players].sort(function (a, b) {
        return (a.is_commander === b.is_commander) ? 0 : a.is_commander ? -1 : 1;
    });

    return <Grid item xl={2}>
        <div className={classes.teamHeader}>
            {getTeamName(game.teams[teamNumber].team_id, game.teams[teamNumber].team_name, game.teams[teamNumber].race)}
        </div>
        <div className={index % 2 ? classes.gridTeamA : classes.gridTeamB}>

            {players.map((player) => {
                    return <div key={shortid.generate()} className={classes.middle}>
                            <span>
                                {
                                    player.is_commander
                                        ? <Avatar alt={player.name} src={'./public/user-24.png'} variant="rounded"
                                                  className={classes.clanIconLatest}/>
                                        : null
                                }
                            </span>

                        <span>
                                {
                                    player.clan_id !== 0
                                        ? <Avatar alt={player.name} src={clanIconUrl + player.clan_id + '.png'}
                                                  variant="rounded"
                                                  className={classes.clanIconLatest}/>
                                        : null
                                }
                            </span>

                        <span className={classes.playersLeft}>
                                {player.name}
                            </span>
                    </div>
                }
            )}
        </div>
    </Grid>
}

const formatGameTime = (gameTime) => {
    const date = new Date(0);
    date.setSeconds(gameTime / 1000);
    return date.toISOString().substr(11, 8);
}


class Latest extends Component {

    render() {
        const {classes} = this.props;

        return <div className={classes.root}>
            <Grid container>
                <Grid item xl={12} className={classes.header}>
                    History (Last 5 finished maps)
                </Grid>
                {this.props.latest.slice(0).reverse().map((result, index) => {

                        return <Grid container key={shortid.generate()}
                                     className={index % 2 ? classes.resultsContainerA : classes.resultsContainerB}>
                            <Grid item xl={1} className={index % 2 ? classes.dataLeftA : classes.dataLeftB}>
                                <div>Map:</div>
                                <div>Finished:</div>
                                <div>Game Time:</div>
                                <div>Winner:</div>
                                <div>Online:</div>
                            </Grid>
                            <Grid item xl={2} className={index % 2 ? classes.dataLeftA : classes.dataLeftB}>
                                <div>{result.game.map_name}</div>
                                <div><Moment unix format="ddd HH:mm:ss">{result.timestamp}</Moment></div>
                                <div>{formatGameTime(result.game.game_time)}</div>
                                <div>{getWinner(result.winner)}</div>
                                <div>{result.game.online}</div>
                            </Grid>
                            <Grid item xl={3} className={classes.gridWorld}>
                                <Avatar alt={result.game.map_name}
                                        src={`https://www.newerth.com/maps/sav1/${result.game.map_name}_overhead.jpg`}
                                        variant="rounded"
                                        className={classes.latestWorld}>
                                    World
                                </Avatar>
                            </Grid>
                            {makeLatestGrid(1, result.game, classes, index)}
                            {makeLatestGrid(2, result.game, classes, index)}
                            {makeLatestGrid(0, result.game, classes, index)}
                        </Grid>
                    }
                )}
            </Grid>
        </div>
    }
}

export default withStyles(useStyles)(Latest)