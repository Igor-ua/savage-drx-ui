import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Grid, Header, Image, Segment, Table} from "semantic-ui-react";

import {TeamStats, WLInfo, WLNames, WPlayer, WPlayerAccuracy} from "../types";
import {getSSF, getWeeklyLadder} from "../requests";
import {getExpectedTeamName} from "../utils";
import {drawableItems} from "../GamesHistory/items";
import {getSsfInfoField} from "../utils/constants";

import './scss/styles-player.scss'


export default () => {
    const params: any = useParams();
    const weekParam = params?.weekName;
    const idParam = params?.id;
    const [ssf, setSSF] = useState<WPlayer>()

    useEffect(() => {
        if (weekParam?.length > 5) {
            getWeeklyLadder(weekParam).then((res) => {
                setSSF(res.data.players[idParam])
            })
        } else if (idParam && Number(idParam) > 0) {
            getSSF(idParam).then((res) => {
                setSSF(res.data)
            })
        }
    }, []);

    return <div className={'csp-stats-player'}>
        <Segment textAlign={"center"} className={'player-header-segment'}>
            <Header as={'h4'} inverted className={'player-header'}>
                {ssf?.name}
            </Header>
        </Segment>
        {ssf
            ? <div>
                <Segment textAlign={"center"} className={''}>
                    <Grid columns="equal" textAlign={"center"}>
                        <Grid.Column textAlign={"center"}>
                            {getCommGamesTable(ssf?.comm_stats)}
                        </Grid.Column>
                        {Object.entries(ssf.team_stats.stats).map((t, index) => (
                            <Grid.Column key={index} textAlign={"center"}>
                                {getTeamGamesTable(getExpectedTeamName(Number(t[0])), t[1])}
                            </Grid.Column>
                        ))}
                    </Grid>
                </Segment>

                <Grid columns="equal" textAlign={"center"}>
                    <Grid.Column width={4} textAlign={"center"}>
                        <Segment textAlign={"center"}>
                            {getNamesTable(ssf.names)}
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign={"center"}>
                        <Segment textAlign={"center"}>
                            {getGeneralInfoTable(ssf.info)}
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign={"center"}>
                        <Segment textAlign={"center"}>
                            {getAccuracyTable(ssf.accuracy)}
                        </Segment>
                    </Grid.Column>
                </Grid>

            </div>
            : null
        }
    </div>
}

const getTeamGamesTable = (teamName: string, stats: TeamStats) => {
    return <Table celled singleLine fixed inverted compact size={"small"}
                  className={"ssf-team-stats"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan="2">{teamName}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell content={'Victories'}/>
                <Table.Cell content={stats.wins}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell content={'Defeats'}/>
                <Table.Cell content={stats.lose}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell content={'Draws'}/>
                <Table.Cell content={stats.draw}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell content={'Games'}/>
                <Table.Cell content={stats.games}/>
            </Table.Row>
        </Table.Body>
    </Table>
}

const getCommGamesTable = (stats: any) => {
    return <Table celled singleLine fixed inverted compact size={"small"}
                  className={"ssf-team-stats"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan="2">{'Commander'}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell content={'Points'}/>
                <Table.Cell content={stats.comm_points}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell content={'Victories'}/>
                <Table.Cell content={stats.comm_wins}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell content={'Defeats'}/>
                <Table.Cell content={stats.comm_lose}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell content={'Draws'}/>
                <Table.Cell content={stats.comm_draw}/>
            </Table.Row>
        </Table.Body>
    </Table>
}

const getNamesTable = (names: Array<WLNames>) => {
    names.sort((a, b) => b.usages - a.usages);
    return <Table celled singleLine fixed inverted compact size={"small"}
                  className={"ssf-names"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row textAlign={"left"}>
                <Table.HeaderCell>{'Names'}</Table.HeaderCell>
                <Table.HeaderCell>{'Usages'}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {names.map((n, index) => (
                <Table.Row key={index} textAlign={"left"}>
                    <Table.Cell content={n.name}/>
                    <Table.Cell content={n.usages}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
}

const getAccuracyTable = (accuracy: WPlayerAccuracy) => {
    return <Table celled fixed inverted compact={"very"} size={"small"}
                  className={"ssf-accuracy"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row textAlign={"left"}>
                <Table.HeaderCell collapsing textAlign={"center"} className={'with-image'}>{'Item'}</Table.HeaderCell>
                <Table.HeaderCell>{'Shots'}</Table.HeaderCell>
                <Table.HeaderCell>{'Hits'}</Table.HeaderCell>
                <Table.HeaderCell>{'Accuracy'}</Table.HeaderCell>
                <Table.HeaderCell>{'Damage'}</Table.HeaderCell>
                <Table.HeaderCell>{'Kills'}</Table.HeaderCell>
                <Table.HeaderCell>{'Deaths'}</Table.HeaderCell>
                <Table.HeaderCell>{'Siege hits'}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {Object.entries(accuracy).map((acc, index) => {
                return <Table.Row key={index} textAlign={"left"}>
                    <Table.Cell textAlign={"center"} className={'with-image'}>
                        <Image src={drawableItems[acc[0]]}
                               size={"small"}
                               inline
                               className={'ssf-item-image'}/>
                    </Table.Cell>
                    <Table.Cell content={acc[1].shots}/>
                    <Table.Cell content={acc[1].hits}/>
                    <Table.Cell>
                        {getAccuracyByValue(acc[1].shots, acc[1].hits)}
                    </Table.Cell>
                    <Table.Cell content={acc[1].damage}/>
                    <Table.Cell content={acc[1].kills}/>
                    <Table.Cell content={acc[1].deaths}/>
                    <Table.Cell content={acc[1].siege_hits}/>
                </Table.Row>
            })}
        </Table.Body>
    </Table>
}

const getGeneralInfoTable = (info: WLInfo) => {
    return <Table celled fixed inverted compact={"very"} size={"small"}
                  className={"ssf-info"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row textAlign={"left"}>
                <Table.HeaderCell>{'Field'}</Table.HeaderCell>
                <Table.HeaderCell>{'Value'}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {Object.entries(info).map((inf, index) => {
                return <Table.Row key={index} textAlign={"left"}>
                    <Table.Cell content={getSsfInfoField(inf[0])}/>
                    <Table.Cell content={inf[1]}/>
                </Table.Row>
            })}
        </Table.Body>
    </Table>
}

const getAccuracyByValue = (shots: number, hits: number) => {
    return shots ? Math.round(hits / shots * 100) + '%' : null;
}