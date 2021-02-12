import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import shortid from 'shortid';

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
    worldAvatar: {
        color: '#fff',
        width: theme.spacing(25),
        height: theme.spacing(25),
        float: 'right'
    },
    gridWorld: {
        paddingBottom: theme.spacing(2)
    },
    gridTeam: {
        padding: theme.spacing(2)
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
    clanIcon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    playerWrapper: {
        display: 'flex'
    },
    middle: {
        display: 'flex',
        alignItems: 'center'
    }
});

const getRaces = (data) => {
    let races = data.race1 + " VS " + data.race2;
    if (data.race3) {
        races += " VS " + data.race3;
    }
    if (data.race4) {
        races += " VS " + data.race4;
    }
    return races;
}

const formatPrefix = (prefix) => {
    if (prefix === '[O]') {
        return <span style={{'color': 'cyan'}}>{prefix}</span>
    }
    if (prefix === '[C]') {
        return <span style={{'color': 'green'}}>{prefix}</span>
    }
    if (prefix === '[R]') {
        return <span style={{'color': 'yellow'}}>{prefix}</span>
    }
    return prefix
}

const makeGrid = (teamNumber, teamName, players, classes) => {
    const clanIconUrl = './public/cached/icondir/'

    return <Grid item xl={4} className={classes.gridTeam}>
        <div className={classes.teamHeader}>{teamNumber !== 0 ? 'Team' + teamNumber : null} {teamName}</div>
        {players.map((player) => {
                const prefix = player[0];
                const clan = player[1];
                const name = player[2];

                return <div key={shortid.generate()} className={classes.middle}>
                <span className={classes.playersRight}>
                    {formatPrefix(prefix)}
                </span>
                    <span>
                    {
                        clan
                            ? <Avatar alt={name} src={clanIconUrl + clan + '.png'} variant="rounded"
                                      className={classes.clanIcon}/>
                            : null
                    }
                </span>
                    <span className={classes.playersLeft}>
                    {name}
                </span>
                </div>
            }
        )}
    </Grid>
}


class Online extends Component {

    render() {
        const {classes} = this.props;
        const data = this.props.data.data;
        const teams = this.props.data.teams;

        const worldImg = `https://www.newerth.com/maps/sav1/${data.world}_overhead.jpg`

        const date = new Date(0);
        date.setSeconds(data.time);
        const timeString = date.toISOString().substr(11, 8);
        const races = getRaces(data)


        return <div className={classes.root}>
            <Grid container>
                <Grid item xl={12} className={classes.header}>
                    IN PROGRESS
                </Grid>
                <Grid item xl={3} className={classes.dataRight}>
                    <div>Name:</div>
                    <div>IP:</div>
                    <div>Map:</div>
                    <div>Players:</div>
                    <div>Version:</div>
                    <div>Game Type:</div>
                    <div>Time Limit:</div>
                    <div>Passworded:</div>
                    <div>Time:</div>
                    <div>Races:</div>
                    <div>Notes:</div>
                </Grid>
                <Grid item xl={3} className={classes.dataLeft}>
                    <div>{data.name}</div>
                    <div>89.39.105.27:11235</div>
                    <div>{data.world}</div>
                    <div>{data.cnum}/{data.cmax}</div>
                    <div>{data.ver}</div>
                    <div>{data.gametype}</div>
                    <div>{data.timelimit}</div>
                    <div>{data.pass === 0 ? 'No!' : 'Yes!'}</div>
                    <div>{timeString}</div>
                    <div>{races}</div>
                    <div>{data.notes}</div>
                </Grid>
                <Grid item xl={6} className={classes.gridWorld}>
                    <Avatar alt={data.world} src={worldImg} variant="rounded" className={classes.worldAvatar}>
                        World
                    </Avatar>
                </Grid>

                {makeGrid(1, teams[1].name, teams[1].players, classes)}
                {makeGrid(2,teams[2].name, teams[2].players, classes)}
                {makeGrid(0, teams[0].name, teams[0].players, classes)}

                {/*todo if team 3-4?*/}

            </Grid>
        </div>
    }
}

export default withStyles(useStyles)(Online)