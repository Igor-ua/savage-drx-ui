import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import shortid from 'shortid';
import {useStyles} from '../css/online-css'
import TableContainer from "@material-ui/core/TableContainer";

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
/**
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

const buildTable = (teams, classes) => {
    const clanIconUrl = './public/cached/icondir/'

    const sortPlayers = (players) => {
        return [...players].sort(function (a, b) {
            a = a.length === 2 ? a[1] : a[0];
            b = b.length === 2 ? b[1] : b[0];
            return a[0].localeCompare(b[0]);
        })
    }


    const getRowsA = (teams) => {
        const t1 = sortPlayers(teams[1].players);
        const t2 = sortPlayers(teams[2].players);
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

    const getRowsB = (teams) => {
        const t3 = teams[3] ? sortPlayers(teams[3].players) : null;
        const t4 = teams[4] ? sortPlayers(teams[4].players) : null;
        const specs = sortPlayers(teams[0].players);

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
            return <td className={classes.emptyTD}></td>;
        }

        const prefix = player[0];
        const clan = player[1];
        const name = player[2];

        return <td>
            <div className={classes.tdInnerDiv}>
                <span style={{paddingRight: '5px', color: 'grey'}}>{index + 1}</span>
                <span className={classes.playersRight}>
                    {formatPrefix(prefix, classes)}
                </span>
                <span>
                    {clan ? <Avatar alt={name} src={clanIconUrl + clan + '.png'} variant="rounded"
                          className={classes.clanIcon}/> : null}
                </span>
                <span className={classes.playersLeft}>{name}</span>
            </div>
        </td>
    }


    return <TableContainer>
        <table className={classes.tablePlayers} style={{tableLayout: 'fixed'}}>
            <thead>
                <tr>
                    <th>Team 1</th>
                    <th>Team 2</th>
                </tr>
            </thead>
            <tbody>
                {getRowsA(teams)}
            </tbody>
        </table>
        <table className={classes.tablePlayers}>
            <thead>
            <tr>
                {teams[3] ? <th>Team 3</th> : null}
                {teams[4] ? <th>Team 4</th> : null}
                <th>Spectators</th>
            </tr>
            </thead>
            <tbody>
            {getRowsB(teams)}
            </tbody>
        </table>
    </TableContainer>
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

        return <div className={classes.root}>
            <Grid container alignItems="flex-start" justify="center">
                <Grid item xs={12} className={classes.header}>
                    Live!
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <table className={classes.table}>
                            <thead/>
                            <tbody>
                                <tr key={shortid.generate()}>
                                    <td align="right">Name</td>
                                    <td align="left" style={{color: 'yellow'}}>{data.name}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">IP</td>
                                    <td align="left">89.39.105.27:11235</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Map</td>
                                    <td align="left" style={{color: 'cyan'}}>{data.world}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Players</td>
                                    <td align="left" style={{color: 'cyan'}}>{data.cnum}/{data.cmax}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Version</td>
                                    <td align="left">{data.ver}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Game Type</td>
                                    <td align="left">{data.gametype}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Time Limit</td>
                                    <td align="left">{data.timelimit}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Passworded</td>
                                    <td align="left">{data.pass === '0' ? 'No!' : 'Yes!'}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Time</td>
                                    <td align="left" style={{color: 'cyan'}}>{timeString}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Races</td>
                                    <td align="left">{getRaces(data)}</td>
                                </tr>
                                <tr key={shortid.generate()}>
                                    <td align="right">Notes</td>
                                    <td align="left">{data.notes}</td>
                                </tr>
                            </tbody>
                        </table>
                    </TableContainer>

                </Grid>
                <Grid item xs={6} className={classes.gridWorld}>
                    <img className={classes.worldAvatar} alt={data.world} src={worldImg}/>
                </Grid>
            </Grid>

            <Grid container alignItems="flex-start" style={{flexWrap: 'wrap'}}>
                <Grid item xs={12}>
                    {buildTable(teams, classes)}
                </Grid>
            </Grid>
        </div>
    }
}

export default withStyles(useStyles)(Online)