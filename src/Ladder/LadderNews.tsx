import React from 'react'
import {Button, Grid, Header, Icon, Image, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

import {LadderProps} from "../types";
import {formatNumber, formatWeeklyPlayer, getEndDateOfISOWeek, getFormattedDate, getStartDateOfISOWeek} from "../utils";

import './scss/styles-ladder-news.scss';


export const LadderNews = ({body, week_name}: LadderProps) => {
    const yearName = Number(week_name.split('_')[0])
    const weekName = Number(week_name.split('_')[1])

    return <div className={'ladder-weekly-news'}>
        <Image className={"weekly-header-image"}
               src={process.env.PUBLIC_URL + "/images/weekly.png"}
               rounded
               inline
               centered
        />
        <div className={'div-header'}>
            <Header as="h3">
                Weekly ladder results<span className={'week-name'}> #{weekName}</span>
                <Header.Subheader>
                    <span>
                        {getFormattedDate(getStartDateOfISOWeek(weekName, yearName))} - {getFormattedDate(getEndDateOfISOWeek(weekName, yearName))}
                    </span>
                </Header.Subheader>
            </Header>
        </div>

        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"center"}>
                {getTable(body.comm_points, 'Commanders (points)', week_name)}
                <div>{getTable(body.auto_buff, 'Auto buffs', week_name)}</div>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
                {getTable(body.kills, 'Kills', week_name)}
                <div>{getTable(body.deaths, 'Deaths', week_name)}</div>
            </Grid.Column>
            <Grid.Column textAlign={"center"}>
                {getTable(body.client_damage, 'Damage on players', week_name)}
                <div>{getTable(body.build_damage, 'Damage on buildings', week_name)}</div>
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

const getTable = (arr: Array<any>, title: string, weekName: string) => {
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
                        {formatWeeklyPlayer(c, weekName)}
                    </Table.Cell>
                    <Table.Cell collapsing>{formatNumber(c.value)}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
}