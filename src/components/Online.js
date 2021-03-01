import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import shortid from 'shortid';

import {useStyles} from '../css/online-css'

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
/*
 * Possible values: [C], [O], [R], [AO], [R] + [C], [R] + [AO], [R] + [O]
 */
const formatPrefix = (prefixes, classes) => {
    const prefix = prefixes.length === 2 ? prefixes[1] : prefixes[0];

    if (prefix === '[C]' || prefix === '[AO]') {
        return getIcon('./public/user-24.png', classes);
    }
    if (prefix === '[O]') {
        return getIcon('./public/officer.png', classes);
    }
    if (prefix === '[R]') {
        return getIcon('./public/red-user-24.png', classes);
    }
}

const getIcon = (src, classes) => {
    return <Avatar src={src} variant="rounded" className={classes.clanIcon}/>
}

const makeGrid = (teamNumber, teamName, players, classes) => {
    const clanIconUrl = './public/cached/icondir/'

    const sortedPlayers = [...players].sort(function (a, b) {
        a = a.length === 2 ? a[1] : a[0];
        b = b.length === 2 ? b[1] : b[0];
        return a[0].localeCompare(b[0]);
    });

    return <Grid item xl={4} className={classes.gridTeam}>
        <div className={classes.teamHeader}>{teamNumber !== 0 ? 'Team' + teamNumber : null} {teamName}</div>
        {sortedPlayers.map((player, index) => {
                const prefix = player[0];
                const clan = player[1];
                const name = player[2];

                return <div key={shortid.generate()} className={classes.middle}>
                    <span style={{marginRight: "10px"}}>{index + 1}</span>
                    <span className={classes.playersRight}>
                        {formatPrefix(prefix, classes)}
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
                    <div>Name</div>
                    <div>IP</div>
                    <div>Map</div>
                    <div>Players</div>
                    <div>Version</div>
                    <div>Game Type</div>
                    <div>Time Limit</div>
                    <div>Passworded</div>
                    <div>Time</div>
                    <div>Races</div>
                    <div>Notes</div>
                </Grid>
                <Grid item xl={4} className={classes.dataLeft}>
                    <div>{data.name}</div>
                    <div>89.39.105.27:11235</div>
                    <div>{data.world}</div>
                    <div>{data.cnum}/{data.cmax}</div>
                    <div>{data.ver}</div>
                    <div>{data.gametype}</div>
                    <div>{data.timelimit}</div>
                    <div>{data.pass === '0' ? 'No!' : 'Yes!'}</div>
                    <div>{timeString}</div>
                    <div>{races}</div>
                    <div>{data.notes}</div>
                </Grid>
                <Grid item xl={5} className={classes.gridWorld}>
                    <Avatar alt={data.world} src={worldImg} variant="rounded" className={classes.worldAvatar}>
                        World
                    </Avatar>
                </Grid>

                {makeGrid(1, teams[1].name, teams[1].players, classes)}
                {makeGrid(2, teams[2].name, teams[2].players, classes)}
                {makeGrid(0, teams[0].name, teams[0].players, classes)}

                {/*todo if team 3-4?*/}

            </Grid>
        </div>
    }
}

export default withStyles(useStyles)(Online)