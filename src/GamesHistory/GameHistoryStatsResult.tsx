import React from "react";
import {Button, Container, Grid, Icon, Image, Table} from "semantic-ui-react";

import './scss/styles-game-history-stats-result.scss';
import {formatGameTime} from "../utils";
import Moment from "react-moment";
import {ExtendedGameResult} from "../types";
import {Link} from "react-router-dom";


export const GameHistoryStatsResult = (gameResult: ExtendedGameResult) => {
    return <Container className={'game-history-stats-result'}>
        <Table inverted celled compact size={"small"} className={'csp-history-stats-result-table'} textAlign={"center"}>

            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell>Map</Table.HeaderCell>
                    <Table.HeaderCell>Played</Table.HeaderCell>
                    <Table.HeaderCell>Duration</Table.HeaderCell>
                    <Table.HeaderCell>Winner</Table.HeaderCell>
                    <Table.HeaderCell>Online</Table.HeaderCell>
                    <Table.HeaderCell/>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing className={'cell-image'}>
                        {gameResult?.game.map_name ?
                            <Image
                                className={'world-image'}
                                src={process.env.REACT_APP_WORLD_LOCATION + gameResult?.game.map_name + '_overhead.jpg'}
                                size={"small"}
                                rounded
                                inline
                                centered
                            /> : null}
                    </Table.Cell>
                    <Table.Cell textAlign={"center"}>{gameResult?.game.map_name}</Table.Cell>
                    <Table.Cell textAlign={"center"}>
                        <Moment unix format="ddd HH:mm:ss">{gameResult?.game.timestamp}</Moment>
                    </Table.Cell>
                    <Table.Cell textAlign={"center"}>
                        {gameResult?.game ? formatGameTime(gameResult?.game.game_time) : null}
                    </Table.Cell>
                    <Table.Cell textAlign={"center"}>
                        {gameResult?.winner == 0 ? 'Draw' : gameResult?.winner == 1 ? 'Human' : 'Beast'}
                    </Table.Cell>
                    <Table.Cell textAlign={"center"}>{gameResult?.game.online}</Table.Cell>
                    <Table.Cell textAlign={"right"}>
                        <Button color={"orange"} size={"small"} as={Link} to={'/history'} content='Back to history'
                                icon='right arrow' labelPosition='right'/>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Container>
}