import React, {useEffect, useState} from 'react'
import {Button, Grid, Header, Icon, Image, Label, List, Segment} from "semantic-ui-react";

import {CLAN_ICON_URL} from "../utils/constants";
import {getLiveServersInfo} from "../requests";
import {LiveServerInfo, LiveProps, Player} from "../types";

import './scss/styles-live.scss';

export default ({background}: LiveProps) => {
    const [liveServersInfo, setLiveServersInfo] = useState<Array<LiveServerInfo>>();
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const refreshDisabledTimeout = 1000;

    useEffect(() => {
        getLiveServersInfo().then(res => {
            setLiveServersInfo(res.data);
        })
    }, []);

    const disableWithTimeout = () => {
        setIsDisabled(true);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsDisabled(false);
        }, refreshDisabledTimeout);
    }

    const getGameTime = (server: LiveServerInfo) => {
        if (server) {
            const data = server.data;
            const date = new Date(0);
            date.setSeconds(data.time);
            return date.toISOString().substr(11, 8);
        }
    }

    const collectPlayers = (server: LiveServerInfo) => {
        let players: Array<Player> = [];
        if (server?.teams) {
            Object.values(server.teams).forEach((team) => {
                team.players.forEach((p) => {
                    players.push({clanIcon: p["1"], name: p["2"]})
                })
            });
            players.sort((a, b) => b.clanIcon.localeCompare(a.clanIcon));
        }
        return players;
    }

    return <div className={'csp-online-wrapper'}>
        <Segment.Group className={'online-widget'}>

            <Segment inverted className={'online-segment-top'}>
                <Header as='h4'>
                    <Icon name='server'/>
                    <Header.Content>
                        {"Server List"}
                        <Label className={'online-label csp-label'} size={"small"}>
                            online
                            <Label.Detail>
                                {liveServersInfo?.reduce((total: number, b: LiveServerInfo) => total + Number(b.data.cnum), 0)}
                            </Label.Detail>
                        </Label>
                    </Header.Content>
                </Header>
            </Segment>

            {liveServersInfo?.map(server => (
                <Segment.Group key={server?.data?.name} className={"server-segments"}>
                    <Segment className={'segment-world-info'}>
                        <Header as='h5' textAlign={"center"} size={"tiny"} className={"server-header"}>
                            {server?.data?.name}
                            <Header.Subheader>{server?.data?.ip}</Header.Subheader>
                        </Header>
                        <Grid columns={"equal"}>
                            <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                <List>
                                    <List.Item>
                                        {server?.data?.world}
                                    </List.Item>
                                    <List.Item>
                                        {getGameTime(server)}
                                    </List.Item>
                                    <List.Item>
                                        Online: {server?.data?.cnum}
                                    </List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={"4"} className={'world-img-column'}>
                                {server?.data?.world
                                    ? <Image
                                        className={'world-image'}
                                        src={process.env.REACT_APP_WORLD_LOCATION + server?.data?.world + '_overhead.jpg'}
                                        size={"tiny"}
                                        rounded
                                        inline/>
                                    : null
                                }
                            </Grid.Column>
                        </Grid>
                    </Segment>

                    <Segment inverted className={'online-users-list customized-scrollbar'} style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + background})`}}>
                        <List>
                            {collectPlayers(server)?.map((p) => (
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
                </Segment.Group>
            ))}

            <Segment textAlign='center' className={'discord-segment-bottom'}>
                <Button icon
                        loading={isLoading}
                        primary
                        fluid
                        size={"small"}
                        onClick={() => {
                            disableWithTimeout();
                            getLiveServersInfo().then(res => {
                                setLiveServersInfo(res.data);
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