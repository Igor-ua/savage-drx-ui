import React from 'react'
import {Grid, Header, Segment, Table} from "semantic-ui-react";

import {formatInfoValue, formatWeeklyPlayer} from "../utils";
import {LadderTopProps, SortedWLadder} from "../types";
import {INFO_FIELDS} from "../utils/constants";

import './scss/styles-ladder-top.scss';


export const LadderTop = ({sortedWeeklyLadder}: LadderTopProps) => {
    return <div className={'ladder-top-wrapper'}>
        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-a"}>
                    <Header as="h4" content={"Commanders"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_POINTS.key, INFO_FIELDS.COMM_POINTS.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_WINS.key, INFO_FIELDS.COMM_WINS.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_LOSE.key, INFO_FIELDS.COMM_LOSE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_DRAW.key, INFO_FIELDS.COMM_DRAW.title, sortedWeeklyLadder.week_name)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-b"}>
                    <Header as="h4" content={"Frags"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.KILLS.key, INFO_FIELDS.KILLS.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.MELEE_KILL.key, INFO_FIELDS.MELEE_KILL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.RANGED_KILL.key, INFO_FIELDS.RANGED_KILL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.DEATHS.key, INFO_FIELDS.DEATHS.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.SIEGE_KILL.key, INFO_FIELDS.SIEGE_KILL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.NPC_KILL.key, INFO_FIELDS.NPC_KILL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.PEON_KILL.key, INFO_FIELDS.PEON_KILL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BUILD_KILL.key, INFO_FIELDS.BUILD_KILL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.SACRIFICE.key, INFO_FIELDS.SACRIFICE.title, sortedWeeklyLadder.week_name)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-c"}>
                    <Header as="h4" content={"Damage"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.NPC_DAMAGE.key, INFO_FIELDS.NPC_DAMAGE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.CLIENT_DAMAGE.key, INFO_FIELDS.CLIENT_DAMAGE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BUILD_DAMAGE.key, INFO_FIELDS.BUILD_DAMAGE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.OUTPOST_DAMAGE.key, INFO_FIELDS.OUTPOST_DAMAGE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.PEON_DAMAGE.key, INFO_FIELDS.PEON_DAMAGE.title, sortedWeeklyLadder.week_name)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-d"}>
                    <Header as="h4" content={"Money & Experience"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.MONEY_DELTA.key, INFO_FIELDS.MONEY_DELTA.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.EXPERIENCE.key, INFO_FIELDS.EXPERIENCE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.MINE.key, INFO_FIELDS.MINE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BUILD.key, INFO_FIELDS.BUILD.title, sortedWeeklyLadder.week_name)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-e"}>
                    <Header as="h4" content={"Different"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.ON_TEAM_TIME.key, INFO_FIELDS.ON_TEAM_TIME.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.AUTO_BUFF.key, INFO_FIELDS.AUTO_BUFF.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.FLAG_CAPTURE.key, INFO_FIELDS.FLAG_CAPTURE.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.HEAL.key, INFO_FIELDS.HEAL.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.JUMPS.key, INFO_FIELDS.JUMPS.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BLOCKS.key, INFO_FIELDS.BLOCKS.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.ORDER_GIVEN.key, INFO_FIELDS.ORDER_GIVEN.title, sortedWeeklyLadder.week_name)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.ORDER_OBEYED.key, INFO_FIELDS.ORDER_OBEYED.title, sortedWeeklyLadder.week_name)}
                </Segment>
            </Grid.Column>
        </Grid>
    </div>
}

const getTable = (swl: SortedWLadder, infoKey: string, header: string, weekName: string) => {
    const top: any = []
    let count = 0
    Object.values(swl.info[infoKey]).map((s, v) => {
        const s_copy = {...s}
        if (count < 5) {
            s_copy.item_value = formatInfoValue(infoKey, s_copy.item_value)
            top.push(s_copy)
        }
        count++
    })

    return <Table celled singleLine fixed inverted compact size={"small"} textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell collapsing colSpan="3">{header}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                top.map((c: any, index: any) => (
                    <Table.Row key={index}>
                        <Table.Cell colSpan="2" collapsing textAlign={"left"}>
                            {formatWeeklyPlayer(c, weekName)}
                        </Table.Cell>
                        <Table.Cell collapsing content={c.item_value}/>
                    </Table.Row>
                ))}
        </Table.Body>
    </Table>
}