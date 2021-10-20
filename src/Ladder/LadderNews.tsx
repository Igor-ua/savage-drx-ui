import React from 'react'
import {Button, Grid, Header, Icon, Image, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

import {LadderProps} from "../types";
import {formatNumber} from "../utils";
import {CLAN_ICON_URL} from "../utils/constants";

import './scss/styles-ladder-news.scss';


export const LadderNews = ({body, week_name}: LadderProps) => {
    return <div className={'ladder-weekly-news'}>
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
                {getTable(body.comm_points, 'Commanders (points)')}
                <div>{getTable(body.auto_buff, 'Auto buffs')}</div>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
                {getTable(body.kills, 'Kills')}
                <div>{getTable(body.deaths, 'Deaths')}</div>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
                {getTable(body.client_damage, 'Damage on players')}
                <div>{getTable(body.build_damage, 'Damage on buildings')}</div>
            </Grid.Column>
        </Grid>

        <Button
            className={'extended-stats-button'}
            primary
            size={"small"}
            as={Link}
            to={'/ladder/week/' + week_name + '/top'}>
            <Icon name='bars' size={"small"}/>
            All Results
        </Button>
    </div>
}

const getTable = (arr: Array<any>, title: string) => {
    return <Table celled singleLine fixed inverted compact size={"small"}
                  className={"top-weekly"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan="3">{title}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {arr.map((c: any, index: any) => (
                <Table.Row key={index}>
                    <Table.Cell colSpan="2" textAlign={"left"}>
                        {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                            size={"small"}
                                            inline
                                            className={'info-clan-icon'}/>
                            : null}
                        <span>{c.name}</span>
                    </Table.Cell>
                    <Table.Cell collapsing>{formatNumber(c.value)}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
}