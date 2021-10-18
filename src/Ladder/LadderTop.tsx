import React from 'react'
import {Grid, Header, Image, Segment, Table} from "semantic-ui-react";

import {SortedWeeklyLadder, SortedWLadder} from "../types";
import {CLAN_ICON_URL, INFO_FIELDS} from "../utils/constants";
import {formatAccumulatedGameTime, formatMoneyDelta, formatNumber, secondsToDhms} from "../utils";

import './scss/styles-ladder-top.scss';


interface LadderTopProps {
    sortedWeeklyLadder: SortedWeeklyLadder
}


export const LadderTop = ({sortedWeeklyLadder}: LadderTopProps) => {

    return <div className={'ladder-top-wrapper'}>

        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-a"}>
                    <Header as="h4" content={"Commanders"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_POINTS, "Points", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_WINS, "Victories", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_LOSE, "Defeats", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.COMM_DRAW, "Draws", "", null)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-b"}>
                    <Header as="h4" content={"Frags"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.KILLS, "Kills", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.MELEE_KILL, "Melee Kills", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.RANGED_KILL, "Ranged Kills", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.DEATHS, "Deaths", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.SIEGE_KILL, "Siege Kills", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.NPC_KILL, "NPC Killed", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.PEON_KILL, "Workers Killed", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BUILD_KILL, "Buildings Killed", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.SACRIFICE, "Sacrificed", "", null)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-c"}>
                    <Header as="h4" content={"Damage"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.NPC_DAMAGE, "Damage on NPC", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.CLIENT_DAMAGE, "Damage on Players", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BUILD_DAMAGE, "Damage on Buildings", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.OUTPOST_DAMAGE, "Damage on Outpost", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.PEON_DAMAGE, "Damage on Workers", "", null)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-d"}>
                    <Header as="h4" content={"Money & Experience"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.MONEY_DELTA, "Money Delta", "", formatMoneyDelta)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.EXPERIENCE, "Experience", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.MINE, "Mined", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BUILD, "Built", "", null)}
                </Segment>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Segment className={"segment-e"}>
                    <Header as="h4" content={"Different"} inverted/>
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.ON_TEAM_TIME, "Game Time", "", formatAccumulatedGameTime)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.AUTO_BUFF, "Self Buffs", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.FLAG_CAPTURE, "Flags Captured", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.HEAL, "Heal", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.JUMPS, "Jumps", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.BLOCKS, "Blocks", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.ORDER_GIVE, "Orders given", "", null)}
                    {getTable(sortedWeeklyLadder.ladder, INFO_FIELDS.ORDER_OBEYED, "Orders obeyed", "", null)}
                </Segment>
            </Grid.Column>
        </Grid>

    </div>
}

const getTable = (swl: SortedWLadder, infoKey: string, header: string, classNamePostfix: string, formatter: any) => {
    const top: any = []
    let count = 0
    Object.values(swl.info[infoKey]).map((s, v) => {
        const s_copy = {...s}
        if (count < 5) {
            s_copy.item_value = formatter ? formatter(s_copy.item_value) : formatNumber(s_copy.item_value)
            top.push(s_copy)
        }
        count++
    })

    return <Table celled singleLine fixed inverted compact
                  size={"small"}
                  className={classNamePostfix ? "ladder-top-weekly-" + classNamePostfix : "ladder-top-weekly"}
                  textAlign={"center"}>
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
                            {c.clan_id ? <Image src={CLAN_ICON_URL + c.clan_id + '.png'}
                                                size={"small"}
                                                inline
                                                className={'info-clan-icon'}/>
                                : null}
                            <span>{c.name}</span>
                        </Table.Cell>
                        <Table.Cell collapsing>{c.item_value}</Table.Cell>
                    </Table.Row>
                ))}
        </Table.Body>
    </Table>
}