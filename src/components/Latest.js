import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import shortid from 'shortid';
import Moment from 'react-moment';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#1e1e25',
        color: 'white',
        borderRadius: '10px 10px 10px 10px'
    },
    header: {
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingBottom: theme.spacing(2)
    },
    latestWorld: {
        color: '#fff',
        width: theme.spacing(18),
        height: theme.spacing(18),
        float: 'left'
    },
    gridWorld: {
        paddingLeft: theme.spacing(5)
    },
    gridTeamLatest: {
        padding: theme.spacing(0)
    },
    dataLeft: {
        textAlign: 'left',
        paddingLeft: theme.spacing(1)
    },
    dataRight: {
        textAlign: 'right',
        paddingRight: theme.spacing(1)
    },
    playersLeft: {
        textAlign: 'left',
        paddingLeft: theme.spacing(0.5)
    },
    playersRight: {
        textAlign: 'right',
        paddingRight: theme.spacing(0.5)
    },
    playersCenter: {
        textAlign: 'center',
        paddingLeft: theme.spacing(0.5)
    },
    teamHeader: {
        textTransform: 'capitalize',
        paddingBottom: theme.spacing(2)
    },
    clanIconLatest: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: theme.spacing(2),
        height: theme.spacing(2)
    },
    playerWrapper: {
        display: 'flex'
    },
    middle: {
        display: 'flex',
        alignItems: 'center'
    },
    resultsContainerA: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#182d31',
        borderRadius: '10px 10px 10px 10px'
    },
    resultsContainerB: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#2b3542',
        borderRadius: '10px 10px 10px 10px'
    }
});

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

const makeLatestGrid = (teamNumber, game, classes) => {
    const clanIconUrl = './public/cached/icondir/'
    const players = game.teams[teamNumber].players;

    return <Grid item xl={2} className={classes.gridTeam}>
        <div className={classes.teamHeader}>
            {getTeamName(game.teams[teamNumber].team_id, game.teams[teamNumber].team_name, game.teams[teamNumber].race)}
        </div>

        {players.map((player) => {
                return <div key={shortid.generate()} className={classes.middle}>
                <span className={classes.playersRight}>
                </span>
                    <span>
                    {
                        player.clan_id !== 0
                            ? <Avatar alt={player.name} src={clanIconUrl + player.clan_id + '.png'} variant="rounded"
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
                            <Grid item xl={1} className={classes.dataLeft}>
                                <div>Map:</div>
                                <div>Finished:</div>
                                <div>Game Time:</div>
                                <div>Winner:</div>
                                <div>Online:</div>
                            </Grid>
                            <Grid item xl={1} className={classes.dataLeft}>
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
                            {makeLatestGrid(1, result.game, classes)}
                            {makeLatestGrid(2, result.game, classes)}
                            {makeLatestGrid(0, result.game, classes)}
                        </Grid>
                    }
                )}
            </Grid>
        </div>
    }
}

export default withStyles(useStyles)(Latest)