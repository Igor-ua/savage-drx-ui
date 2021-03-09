import React, {useEffect, useState} from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {ThemeProvider} from "@material-ui/styles";
import ResponsiveSideBar from "./ResponsiveSideBar";
import {useStyles} from '../css/map-result-css'
import shortid from "shortid";
import API from "./Api";
import TableContainer from "@material-ui/core/TableContainer";
import Moment from "react-moment";
import Avatar from "@material-ui/core/Avatar";
import {formatGameTime, getTeamName, getWinner, sortCommanders} from "../utils/utils";
import {CLAN_ICON_URL} from "../utils/constants";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const theme = createMuiTheme({
    typography: {
        fontSize: 12
    },
});

const getTableResults = (result, classes) => {
    return <TableContainer className={classes.tableContainer}>
        <table className={classes.table}>
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

const getTablesWithsStats = (game, playersInfo, classes) => {
    const info = {}
    playersInfo.map((p) => {
        info[p.name] = {
            clan_id: p.clan_id,
            uid: p.uid,
            clan_tag_name: p.clan_tag_name,
            stats: p.info,
        }
    });

    // console.log(info)

    return [
        buildTableWithStats(game.teams[1], info, classes),
        buildTableWithStats(game.teams[2], info, classes),
        game.teams[3] ? buildTableWithStats(game.teams[3], info, classes) : null,
        game.teams[4] ? buildTableWithStats(game.teams[4], info, classes) : null,
        buildTableWithStats(game.teams[0], info, classes),
    ];
}

const buildTableWithStats = (team, info, classes) => {
    if (team.players && team.players.length === 0) {
        return;
    }

    const getRows = (team) => {
        const players = sortCommanders(team.players);

        let result = []
        for (let i = 0; i < players.length; i++) {
            result.push(
                <tr key={shortid.generate()}>
                    {getCell(players[i], i)}
                </tr>
            )
        }
        return result;
    }

    const getInfo = (player, param) => {
        return info[player.name] ? info[player.name].stats[param] : null
    }

    const getCell = (player, index) => {
        if (!player) {
            return <td className={classes.emptyTD}></td>;
        }

        return [
                <td key={shortid.generate()}>
                    <div className={classes.tdInnerDiv}>
                        <span style={{paddingRight: '5px', color: 'grey'}}>{index + 1}</span>
                        <span>
                            {player.is_commander ? <Avatar alt={player.name} src={'/public/user-24.png'} variant="rounded"
                                                           className={classes.clanIcon}/> : null }
                        </span>
                        <span>
                            {player.clan_id !== 0 ? <Avatar alt={player.name} src={CLAN_ICON_URL + player.clan_id + '.png'}
                                                            variant="rounded" className={classes.clanIcon}/> : null }
                        </span>
                        <span className={classes.playersLeft}>{player.name}</span>
                    </div>
                </td>,
                <td key={shortid.generate()}>{formatGameTime(getInfo(player, 'on_team_time'))}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'experience')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'kills')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'deaths')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'auto_buff')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'blocks')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'build')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'build_damage')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'build_kill')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'carn_hp')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'client_damage')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'flag_capture')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'heal')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'jumps')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'kill_streak')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'melee_kill')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'mine')}</td>,
                <td key={shortid.generate()}>{
                        getInfo(player, 'money_gained') - getInfo(player, 'money_spent')
                }</td>,
                <td key={shortid.generate()}>{getInfo(player, 'npc_kill')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'ranged_kill')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'sacrifice')}</td>,
                <td key={shortid.generate()}>{getInfo(player, 'siege_kill')}</td>
        ]
    }


    return <Grid item xl={12} className={classes.extendedGridWrapper} key={shortid.generate()}>
        <TableContainer className={classes.extendedTableWrapper} key={shortid.generate()}>
            <table className={classes.extendedTablePlayers}>
                <thead>
                <tr>
                    <th>{getTeamName(team.team_id, team.team_name, team.race)}</th>
                    <th>On-Team Time</th>
                    <th>Exp</th>
                    <th>Kills</th>
                    <th>Deaths</th>
                    <th>Buffs</th>
                    <th>Blocks</th>
                    <th>Build</th>
                    <th>B.dmg</th>
                    <th>B.kill</th>
                    <th>Carn</th>
                    <th>C.dmg</th>
                    <th>Flags</th>
                    <th>Heal</th>
                    <th>Jumps</th>
                    <th>Kill Streak</th>
                    <th>M.kills</th>
                    <th>Mine</th>
                    <th>M.gained - spent</th>
                    <th>NPC killed</th>
                    <th>Ranged kill</th>
                    <th>Sacrifice</th>
                    <th>Siege kill</th>
                </tr>
                </thead>
                <tbody>
                    {getRows(team)}
                </tbody>
            </table>
        </TableContainer>
    </Grid>
}

const getGraphData = (data) => {
    const graphData = [];
    let items = {};

    let first = true;
    data.map((d) => {
        d.players.map((player) => {
            player.accuracy.map((item) => {
                items[item.name] = items[item.name] ||
                    {
                        name: null,
                        data: [],
                        visible: first,
                        dataLabels: {
                            align: 'center',
                            format: '{y}',

                            enabled: true,
                            rotation: -0,
                            color: '#FFFFFF',
                            style: {
                                fontSize: '8px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    };
                if (first) {
                    first = false;
                }

                const itemName = items[item.name];
                if (item.name === 'Coil Rifle' || item.name === 'Tempest') {
                    itemName.visible = true;
                }

                // wtf is this 'desc 0'? skip it for now...
                if (item.name !== 'desc 0') {
                    itemName.name = item.name;
                    const accuracy = Math.round(item.hits / item.shots * 100);
                    if (accuracy) {
                        itemName.data.push([player.name, accuracy, item.hits, item.shots]);
                    }
                }
            });
        });
    });

    Object.keys(items).forEach((item) => {
        if (!items[item].data.length) {
            delete items[item];
        } else {
            graphData.push(items[item]);
        }
    });

    return graphData;
}


const MapResult = (props) => {
    const classes = props.classes;
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API.get(`/stats/result/${props.match.params.timestamp}`);
            setData(result.data);
        })()
    }, [])

    const graphData = getGraphData(data);
    const options = {
        chart: {
            type: 'column',
            height: 600
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            max: 100,
            tickInterval: 10,
            labels: {
                formatter: function() {
                    return this.value+"%";
                }
            },
            title: {
                enabled: true,
                text: 'Accuracy'
            },
        },
        tooltip: {
            formatter: function() {
                let shots = 0;
                let hits = 0;
                this.series.userOptions.data.map((d) => {
                    if (d[0] === this.point.options.name) {
                        hits = d[2];
                        shots = d[3];
                    }
                });

                if (shots) {
                    return '<b>' + this.point.options.name + ': </b>' + this.point.options.y + '%<br/>(' +
                        hits + ' hits, ' + shots + ' shots)';
                } else {
                    return null;
                }
            }
        },
        series: graphData,
        title: {
            text: 'Accuracy, (hits/shots*100%)'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    inside: true
                }
            }
        },
    };

    return <div className={classes.root}>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <ResponsiveSideBar/>
            <main className={classes.content}>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item xl={9}>
                        <Grid container className={classes.innerGridContainer}>
                            <Grid item xl={12}>
                                <HighchartsReact highcharts={Highcharts} options={options} />
                            </Grid>
                            {data.map( d =>
                                getTablesWithsStats(d.game, d.players, classes)
                             )}
                        </Grid>
                    </Grid>
                    {data.map( d =>
                    <Grid item xl={3} className={classes.online} key={shortid.generate()}>
                        <Grid container className={classes.resultsContainer}>
                            <Grid item xl={12} className={classes.gridWorld}>
                                <div className={classes.imageWrapper}>
                                    <img alt={d.game.map_name}
                                         src={`https://www.newerth.com/maps/sav1/${d.game.map_name}_overhead.jpg`}
                                         className={classes.world}
                                    />
                                </div>

                                <div>
                                    {getTableResults(d, classes)}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    )}
                </Grid>
            </main>
        </ThemeProvider>
    </div>
}

export default withStyles(useStyles)(MapResult)
