import React from 'react'
import {Button, Grid, Header, Icon, Image, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

import {LadderProps} from "../types";
import {CLAN_ICON_URL} from "../utils/constants";

import './scss/styles-ladder-news.scss';


export const LadderNews = ({body, week_name}: LadderProps) => {
    return <div className={'ladder-news'}>
        <Image className={"weekly-header-image"}
               src={process.env.PUBLIC_URL + "/images/weekly.png"}
               rounded
               inline
               centered
        />
        <div className={'div-header'}>
            <Header as="h3">
                Weekly ladder results
                <Header.Subheader>
                    <span className={'week-name'}>{week_name.split('_')[1]} </span>/
                    <span className={'year-name'}> {week_name.split('_')[0]}</span>
                </Header.Subheader>
            </Header>
        </div>

        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"center"}>
                <Table celled inverted compact size={"small"}
                       className={"top-weekly"}
                       textAlign={"center"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell collapsing colSpan="2">Commanders (points)</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {body.comm_points.map((c: any) => (
                            <Table.Row>
                                <Table.Cell collapsing textAlign={"left"}>
                                    {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                        size={"small"}
                                                        inline
                                                        className={'info-clan-icon'}/>
                                        : null}
                                    <span>{c.name}</span>
                                </Table.Cell>
                                <Table.Cell collapsing>{c.value}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <div>
                    <Table celled inverted compact size={"small"}
                           className={"top-weekly"}
                           textAlign={"center"}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell collapsing colSpan="2">Auto buffs</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {body.auto_buff.map((c: any) => (
                                <Table.Row>
                                    <Table.Cell collapsing textAlign={"left"}>
                                        {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                            size={"small"}
                                                            inline
                                                            className={'info-clan-icon'}/>
                                            : null}
                                        <span>{c.name}</span>
                                    </Table.Cell>
                                    <Table.Cell collapsing>{c.value}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Table celled inverted compact size={"small"}
                       className={"top-weekly"}
                       textAlign={"center"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell collapsing colSpan="2">Kills</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {body.kills.map((c: any) => (
                            <Table.Row>
                                <Table.Cell collapsing textAlign={"left"}>
                                    {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                        size={"small"}
                                                        inline
                                                        className={'info-clan-icon'}/>
                                        : null}
                                    <span>{c.name}</span>
                                </Table.Cell>
                                <Table.Cell collapsing>{c.value}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <div>
                    <Table celled inverted compact size={"small"}
                           className={"top-weekly"}
                           textAlign={"center"}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell collapsing colSpan="2">Deaths</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {body.deaths.map((c: any) => (
                                <Table.Row>
                                    <Table.Cell collapsing textAlign={"left"}>
                                        {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                            size={"small"}
                                                            inline
                                                            className={'info-clan-icon'}/>
                                            : null}
                                        <span>{c.name}</span>
                                    </Table.Cell>
                                    <Table.Cell collapsing>{c.value}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Table celled inverted compact size={"small"}
                       className={"top-weekly"}
                       textAlign={"center"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell collapsing colSpan="2">Damage on players</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {body.client_damage.map((c: any) => (
                            <Table.Row>
                                <Table.Cell collapsing textAlign={"left"}>
                                    {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                        size={"small"}
                                                        inline
                                                        className={'info-clan-icon'}/>
                                        : null}
                                    <span>{c.name}</span>
                                </Table.Cell>
                                <Table.Cell collapsing>{c.value}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <div>
                    <Table celled inverted compact size={"small"}
                           className={"top-weekly"}
                           textAlign={"center"}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell collapsing colSpan="2">Damage on buildings</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {body.build_damage.map((c: any) => (
                                <Table.Row>
                                    <Table.Cell collapsing textAlign={"left"}>
                                        {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                            size={"small"}
                                                            inline
                                                            className={'info-clan-icon'}/>
                                            : null}
                                        <span>{c.name}</span>
                                    </Table.Cell>
                                    <Table.Cell collapsing>{c.value}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </Grid.Column>
        </Grid>

        <Button
            className={'extended-stats-button'}
            primary
            size={"small"}
            as={Link}
            to={'/ladder/week/' + week_name}>
            <Icon name='bars' size={"small"}/>
            All Results
        </Button>
    </div>
}