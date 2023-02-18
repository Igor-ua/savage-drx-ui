import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import {Button, Grid, Icon, Image, Table} from "semantic-ui-react";

import {addCommanders, formatGameTime, getCurrentTimeSeconds, getWinner, isCacheOutdated} from "../utils";
import {getGameResults} from "../requests";
import {DEFAULT_GAMES_HISTORY_QUANTITY, GAMES_HISTORY_TTL_SECONDS} from "../utils/constants";
import {GameResult} from "../types";

import './scss/styles-games-history.scss';


export const GamesHistory = () => {

    const dispatch = useDispatch()
    const gamesHistoryCache = useSelector((state: any) => state.gamesHistoryReducer, shallowEqual);
    const [gameResult, setGameResult] = useState<Array<GameResult>>();

    useEffect(() => {
        if (isCacheOutdated(gamesHistoryCache?.ttl, gamesHistoryCache?.timestamp)) {
            getGameResults(DEFAULT_GAMES_HISTORY_QUANTITY).then(res => {
                setGameResult(addCommanders(res.data));
                dispatch({
                    type: 'SET_GAMES_RESULT',
                    payload:
                        {
                            timestamp: getCurrentTimeSeconds(),
                            ttl: GAMES_HISTORY_TTL_SECONDS,
                            data: res.data
                        }
                });
            })
        } else {
            setGameResult(gamesHistoryCache.data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className={'games-history-wrapper'}>
        <div className={'grid-wrapper'}>
            <Grid columns='equal'>
                <Grid.Column className={'grid-column'}>
                    <Table celled inverted compact selectable size={"small"} className={'history-table'}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell collapsing>#</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"}>Server</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"} collapsing colSpan='2'>Map</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"} collapsing>Played</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"} collapsing>Duration</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"} collapsing>Online</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"}>Winner</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"}>Commanders</Table.HeaderCell>
                                <Table.HeaderCell textAlign={"center"}>Stats</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {gameResult?.slice(0).reverse().map((gr, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell collapsing>{index + 1}</Table.Cell>
                                    <Table.Cell>
                                        {gr.server_name === 'csp'
                                            ? <span className={'span-europe-nl'}>Europe (NL)</span>
                                            : <span className={'span-usa-dallas'}>USA (Dallas)</span>
                                        }
                                    </Table.Cell>
                                    <Table.Cell textAlign={"center"} collapsing>
                                        <Image
                                            src={process.env.REACT_APP_WORLD_LOCATION + gr.game.map_name + '_overhead.jpg'}
                                            size={"mini"}
                                            inline
                                            rounded
                                            centered
                                        />
                                    </Table.Cell>
                                    <Table.Cell collapsing>{gr.game.map_name}</Table.Cell>
                                    <Table.Cell textAlign={"center"} collapsing>
                                        <Moment unix format="ddd HH:mm:ss">{gr.game.timestamp}</Moment>
                                    </Table.Cell>
                                    <Table.Cell collapsing>{formatGameTime(gr.game.game_time)}</Table.Cell>
                                    <Table.Cell textAlign={"center"}
                                                className={'cell-online'}>{gr.game.online}</Table.Cell>
                                    <Table.Cell textAlign={"center"}
                                                className={'cell-winner-' + getWinner(gr.winner)?.toLowerCase()}>
                                        {getWinner(gr.winner)}
                                    </Table.Cell>
                                    <Table.Cell textAlign={"center"}>
                                        <span className={'span-human-commander'}>
                                            {gr.game.teams["1"]?.commander_name ? gr.game.teams["1"]?.commander_name : '---'}
                                        </span>
                                        <span className={'span-vs'}>{' vs '}</span>
                                        <span className={'span-beast-commander'}>
                                            {gr.game.teams["2"]?.commander_name ? gr.game.teams["2"]?.commander_name : '---'}
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell textAlign={"center"} width={"2"}>
                                        <Button
                                            primary
                                            size={"small"}
                                            as={Link}
                                            to={'/history/' + gr?.timestamp + '/stats'}>
                                            <Icon name='bars' size={"small"}/>
                                            open
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
        </div>
    </div>
}