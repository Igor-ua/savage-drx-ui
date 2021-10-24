import React, {useEffect, useState} from 'react'
import {Button, Header, Icon, Image, Label, List, Segment, Table} from "semantic-ui-react";

import {CLAN_ICON_URL} from "../utils/constants";
import {getLiveServerInfo} from "../requests";
import {LiveServerInfo, LiveProps, Player} from "../types";

import './scss/styles-live.scss';

export default ({server, name, background}: LiveProps) => {
    const [liveServerInfo, setLiveServerInfo] = useState<LiveServerInfo>();
    const [players, setPlayers] = useState<Array<Player>>();
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const refreshDisabledTimeout = 1000;

    useEffect(() => {
        getLiveServerInfo(server).then(res => {
            setLiveServerInfo(res.data);
        })
    }, []);

    useEffect(() => {
        if (liveServerInfo) {
            let players: Array<Player> = [];
            Object.values(liveServerInfo.teams).forEach((team) => {
                team.players.forEach((p) => {
                    players.push({clanIcon: p["1"], name: p["2"]})
                })
            })
            players.sort((a, b) => b.clanIcon.localeCompare(a.clanIcon));
            setPlayers(players);
        }
    }, [liveServerInfo]);

    const disableWithTimeout = () => {
        setIsDisabled(true);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsDisabled(false);
        }, refreshDisabledTimeout);
    }

    const getGameTime = () => {
        if (liveServerInfo) {
            const data = liveServerInfo.data;
            const date = new Date(0);
            date.setSeconds(data.time);
            return date.toISOString().substr(11, 8);
        }
    }

    const getRaces = () => {
        if (liveServerInfo) {
            const data = liveServerInfo.data;
            let races = data.race1 + " VS " + data.race2;
            races += data.race3 ? " VS " + data.race3 : '';
            races += data.race4 ? " VS " + data.race4 : '';
            return races;
        }
    }

    return <div className={'csp-online-wrapper'}>
        <Segment.Group className={'online-widget'}>
            <Segment inverted className={'online-segment-top'}>
                <Header as='h4'>
                    <Icon name='server'/>
                    <Header.Content>
                        {name}
                        <Label className={'online-label csp-label'} size={"small"}>
                            online
                            <Label.Detail>{liveServerInfo?.data.cnum}</Label.Detail>
                        </Label>
                    </Header.Content>
                </Header>
            </Segment>
            <Segment className={'segment-world-info'}>
                <Table className={'world-info-table'} compact={"very"}>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell rowSpan={4}>
                                {liveServerInfo ?
                                    <Image
                                        className={'world-image'}
                                        src={process.env.REACT_APP_WORLD_LOCATION + liveServerInfo?.data?.world + '_overhead.jpg'}
                                        size={"tiny"}
                                        rounded
                                        inline
                                    /> : null}
                            </Table.Cell>
                            <Table.Cell>{liveServerInfo?.data?.world}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>{getGameTime()}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>{getRaces()}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
            <Segment inverted className={'online-users-list customized-scrollbar'} style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + background})`
            }}>
                <List>
                    {players?.map((p) => (
                        <List.Item key={p.name}>
                            {p.clanIcon ? <Image src={CLAN_ICON_URL + p.clanIcon + '.png'}
                                                 size={"small"}
                                                 inline
                                                 className={'online-clan-icon'}/>
                                : null}
                            <span className={p.clanIcon ? '' : 'name-without-icon'}>{p.name}</span>
                        </List.Item>
                    ))}
                </List>
            </Segment>
            <Segment textAlign='center' className={'discord-segment-bottom'}>
                <Button icon
                        loading={isLoading}
                        primary
                        fluid
                        size={"small"}
                        onClick={() => {
                            disableWithTimeout();
                            getLiveServerInfo(server).then(res => {
                                setLiveServerInfo(res.data);
                            })
                        }}
                        disabled={isDisabled}
                        compact>
                    <Icon name='refresh'/> Refresh
                </Button>
            </Segment>
        </Segment.Group>
    </div>
}