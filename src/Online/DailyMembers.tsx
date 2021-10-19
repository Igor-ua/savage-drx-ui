import React, {useEffect, useState} from "react";
import {shallowEqual, useSelector} from 'react-redux'
import {Grid, Header, Image, Label, List, Segment} from "semantic-ui-react";

import {DailyChartInfo, DailySnapshot, DPlayer} from "../types";
import {CLAN_ICON_URL} from "../utils/constants";

import './scss/styles-daily-members.scss';


const removeDuplicates = (arr: Array<DPlayer>) =>
    arr.filter((v, i, a) =>
        a.findIndex(t => (t.uid === v.uid && v.uid !== 0)) === i)

const extractPlayers = (dailyOnline: Array<DailySnapshot>) => {
    const dPlayers = Array<DPlayer>();
    dailyOnline.map((d: DailySnapshot) => {
        Object.values(d.teams).map((dsTeam) => {
            if (dsTeam && dsTeam.players) {
                dsTeam.players.map((p) => {
                    dPlayers.push({name: p.name, uid: p.uid, clan_id: p.clan_id});
                });
            }
        });
    });
    return dPlayers;
}

export const DailyMembers = ({server}: DailyChartInfo) => {
    const dailyCache = useSelector((state: any) => state.dailyOnlineReducer, shallowEqual);
    const [dailyPlayersRight, setDailyPlayersRight] = useState<Array<DPlayer>>();
    const [dailyPlayersLeft, setDailyPlayersLeft] = useState<Array<DPlayer>>();
    const [dailySize, setDailySize] = useState(0);

    useEffect(() => {
        if (dailyCache && dailyCache[server]) {
            const dailyPlayers = removeDuplicates(extractPlayers(dailyCache[server].data));
            setDailySize(dailyPlayers.length);
            const half = Math.ceil(dailyPlayers.length / 2);
            setDailyPlayersRight(dailyPlayers.slice(0, half))
            setDailyPlayersLeft(dailyPlayers.slice(half))
        }
    }, [dailyCache, server]);

    return <div className={'csp-daily-members-wrapper'}>
        <Segment.Group className={'daily-members-segment-group'}>
            <Segment className={'daily-members-segment-top'}>
                <Header as='h5' inverted textAlign={"center"} content={'Players'} subheader={'(last 24h)'}
                        className={'daily-members-header'}/>
                <Label className={'csp-label'} size={"small"} attached={"top right"}>
                    Total
                    <Label.Detail content={dailySize}/>
                </Label>
            </Segment>
            <Segment secondary className={'daily-members-users-list-segment customized-scrollbar'} style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/human_unit_savage.jpg'})`
            }}>
                <Grid columns='equal'>
                    <Grid.Column>
                        <List>{dailyPlayersLeft?.map((p, index) => (
                            <List.Item key={index}>
                                {p.clan_id ? <Image src={CLAN_ICON_URL + p.clan_id + '.png'}
                                                    size={"small"}
                                                    inline
                                                    className={'online-clan-icon'}/>
                                    : null}
                                <span className={p.clan_id ? '' : 'name-without-icon'}>{p.name}</span>
                            </List.Item>
                        ))}
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>{dailyPlayersRight?.map((p, index) => (
                            <List.Item key={index}>
                                {p.clan_id ? <Image src={CLAN_ICON_URL + p.clan_id + '.png'}
                                                    size={"small"}
                                                    inline
                                                    className={'online-clan-icon'}/>
                                    : null}
                                <span className={p.clan_id ? '' : 'name-without-icon'}>{p.name}</span>
                            </List.Item>
                        ))}
                        </List>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment className={'daily-members-segment-bottom'}/>
        </Segment.Group>
    </div>
}