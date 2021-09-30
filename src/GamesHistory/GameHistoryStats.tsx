import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Container, Grid, Menu} from "semantic-ui-react";

import {getGameResultByTimestamp} from "../requests";
import {StatsInfoTable} from "./GameHistoryStatsInfo";
import {GameHistoryStatsResult} from "./GameHistoryStatsResult";
import {StatsAccuracyTable} from "./GameHistoryStatsAccuracy";
import {EGRAccuracy, ExtendedGameResult} from "../types";

import './scss/styles-game-history-stats.scss';


export const GameHistoryStats = () => {

    const params: any = useParams();
    const timestamp = params?.timestamp;
    const [gameResult, setGameResult] = useState<ExtendedGameResult>();
    const [activeMenu, setActiveMenu] = useState('stats');

    useEffect(() => {
        getGameResultByTimestamp(timestamp).then(res => {
            if (res.data.length) {
                const result: ExtendedGameResult = res.data[0];

                interface APMCollection {
                    [key: string]: {
                        [key: string]: EGRAccuracy
                    }
                }

                const playersMap: any = {};
                const accuracyPlayerMap: APMCollection = {};

                result.players.map((p) => {
                    playersMap[p.name] = p;
                    p.accuracy.map((accuracy) => {
                        const an = accuracyPlayerMap[accuracy.name] || {};
                        an[p.name] = accuracy;
                        accuracyPlayerMap[accuracy.name] = an;
                    })
                })

                Object.values(result.game.teams).map((team) => {
                    team.players.map((player) => {
                        player.p = playersMap[player.name]
                    })
                })

                result.p_accuracies = result.players.map((p) => {
                    const acPlayer: any = {
                        name: p.name,
                        clan_id: p.clan_id,
                        accuracies: []
                    };

                    for (const [accuracyName, players] of Object.entries(accuracyPlayerMap)) {
                        acPlayer.accuracies.push({
                            name: accuracyName,
                            value: players[p.name] && players[p.name].shots > 0 ? players[p.name] : null
                        })
                    }
                    return acPlayer;
                })

                setGameResult(result);
            }
        })
    }, []);

    return <div className={'game-history-stats'}>
        <div className={'grid-wrapper'}>
            <Grid columns='equal'>
                <Grid.Column className={'grid-column'}>
                    {gameResult ? GameHistoryStatsResult(gameResult) : null}

                    <Container className={'history-stats-menu-container'}>
                        <Menu inverted size={"mini"} fluid widths={2} className={'stats-menu'}>
                            <Menu.Item
                                className={'menu-item-stats'}
                                name='Stats'
                                active={activeMenu === 'stats'}
                                onClick={() => {
                                    setActiveMenu('stats')
                                }}
                                color={"orange"}
                                position={"right"}
                            />
                            <Menu.Item
                                className={'menu-item-accuracy'}
                                name='Accuracy'
                                active={activeMenu === 'accuracy'}
                                onClick={() => {
                                    setActiveMenu('accuracy')
                                }}
                                color={"orange"}
                                position={"left"}
                            />
                        </Menu>
                    </Container>

                    {activeMenu === 'stats'
                        ? gameResult ? drawInfo(gameResult) : null
                        : gameResult?.p_accuracies?.length ? drawAccuracy(gameResult) : null
                    }
                </Grid.Column>
            </Grid>
        </div>
    </div>
}

const drawInfo = (gameResult: ExtendedGameResult) => {
    return <div>
        {StatsInfoTable(gameResult.game.teams['1'])}
        {StatsInfoTable(gameResult.game.teams['2'])}
        {gameResult.game.teams['3'] ? StatsInfoTable(gameResult.game.teams['3']) : null}
        {gameResult.game.teams['4'] ? StatsInfoTable(gameResult.game.teams['4']) : null}
        {StatsInfoTable(gameResult.game.teams['0'])}
    </div>
}

const drawAccuracy = (gameResult: ExtendedGameResult) => {
    return <div>
        {StatsAccuracyTable(gameResult.p_accuracies)}
    </div>
}