import React, {useEffect, useState} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import Moment from "react-moment";

import {Button, Grid, Icon, Image, Table} from "semantic-ui-react";
import {getGameResults} from "../requests";

import {GameResult} from "../types";
import './scss/styles-game-history-stats.scss';
import {addCommanders, formatGameTime, getWinner} from "../utils";


export const GameHistoryStats = () => {

    const params: any = useParams();
    const timestamp = params?.timestamp;
    const [gameResult, setGameResult] = useState<Array<GameResult>>();
    const history = useHistory();

    console.log(gameResult);

    useEffect(() => {
        // getGameResults(DEFAULT_QUANTITY).then(res => {
        //     setGameResult(addCommanders(res.data));
        // })
    }, []);

    return <div className={'csp-game-history-stats-wrapper'}>
        <div className={'grid-wrapper'}>
            <Grid columns='equal'>
                <Grid.Column className={'grid-column'}>

                    <Button
                        primary
                        size={"small"}
                        as={Link}
                        to={'/history'}
                        onClick={() => {
                            console.log('click')
                        }}>
                        <Icon name='bars' size={"small"}/>
                        open
                    </Button>

                    {/*<Table celled inverted compact selectable size={"small"} className={'history-table'}>*/}
                    {/*    <Table.Header>*/}
                    {/*        <Table.Row>*/}
                    {/*            <Table.HeaderCell collapsing>#</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell textAlign={"center"}>Server</Table.HeaderCell>*/}
                    {/*            <Table.HeaderCell textAlign={"center"} collapsing colSpan='2'>Map</Table.HeaderCell>*/}
                    {/*        </Table.Row>*/}
                    {/*    </Table.Header>*/}

                    {/*    <Table.Body>*/}
                    {/*        {gameResult?.slice(0).reverse().map((gr, index) => (*/}
                    {/*            <Table.Row key={index}>*/}
                    {/*                <Table.Cell collapsing>{index + 1}</Table.Cell>*/}
                    {/*                <Table.Cell>*/}
                    {/*                    {gr.server_name === 'csp'*/}
                    {/*                        ? <span className={'span-europe-nl'}>Europe (NL)</span>*/}
                    {/*                        : <span className={'span-usa-dallas'}>USA (Dallas)</span>*/}
                    {/*                    }*/}
                    {/*                </Table.Cell>*/}
                    {/*                <Table.Cell textAlign={"center"} collapsing>*/}
                    {/*                    <Image*/}
                    {/*                        src={process.env.REACT_APP_WORLD_LOCATION + gr.game.map_name + '_overhead.jpg'}*/}
                    {/*                        size={"mini"}*/}
                    {/*                        inline*/}
                    {/*                        rounded*/}
                    {/*                        centered*/}
                    {/*                    />*/}
                    {/*                </Table.Cell>*/}
                    {/*            </Table.Row>*/}
                    {/*        ))}*/}
                    {/*    </Table.Body>*/}
                    {/*</Table>*/}
                </Grid.Column>
            </Grid>
        </div>
    </div>
}