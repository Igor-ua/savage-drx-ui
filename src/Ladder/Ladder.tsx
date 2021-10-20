import React, {useEffect, useState} from 'react'
import {Container, Header, Icon, Menu, Segment} from "semantic-ui-react";
import {Link, useParams, useRouteMatch} from "react-router-dom";

import {LadderTop} from "./LadderTop";
import {LadderExtended} from "./LadderExtended";
import {getLiveWeeklyLadder, getWeeklyLadder} from "../requests";
import {getCurrentWeekCode} from "../utils";
import {SortedWeeklyLadder, WeeklyLadder} from "../types";
import {INFO_FIELDS, ROUTES} from "../utils/constants";

import './scss/styles-ladder.scss';


export const Ladder = () => {
    const isLive = useRouteMatch(ROUTES.ladderLiveTab);
    const params: any = useParams();
    const weekName = params?.weekName;
    const current_year = getCurrentWeekCode().split('_')[0]
    const current_week = getCurrentWeekCode().split('_')[1]
    const historicalWeek = weekName?.split('_')[1]
    const historicalYear = weekName?.split('_')[0]
    const [activeMenu, setActiveMenu] = useState(params?.tab);
    const [weeklyLadder, setWeeklyLadder] = useState<WeeklyLadder>();
    const [sortedWeeklyLadder, setSortedWeeklyLadder] = useState<SortedWeeklyLadder>();
    const linkTop = isLive ? '/ladder/live/top' : '/ladder/week/' + weekName + '/top'
    const linkExtended = isLive ? '/ladder/live/extended' : '/ladder/week/' + weekName + '/extended'

    useEffect(() => {
        if (isLive) {
            getLiveWeeklyLadder().then(res => {
                setWeeklyLadder(res.data)
            })
        } else {
            getWeeklyLadder(weekName).then(res => {
                setWeeklyLadder(res.data)
            })
        }
    }, []);

    useEffect(() => {
        if (weeklyLadder) {
            const sortedWeeklyLadder = getSortedWeeklyLadder(weeklyLadder)
            setSortedWeeklyLadder(sortedWeeklyLadder)
        }
    }, [weeklyLadder]);

    return <div className={'ladder-wrapper'}>

        <Segment textAlign={"center"} className={'ladder-segment'}>
            <Header as={'h4'} inverted className={'ladder-header'}>
                {isLive
                    ? <span><span>Week </span><span
                        className={'week-number'}>#{current_week}</span><span>/{current_year}</span></span>
                    : <span><span>Week </span><span
                        className={'week-number'}>#{historicalWeek}</span><span>/{historicalYear}</span></span>}
                {isLive
                    ? <Header.Subheader className={'sub-live'}>Live!</Header.Subheader>
                    : <Header.Subheader className={'sub-finished'}>Finished</Header.Subheader>
                }
            </Header>
        </Segment>

        <Container className={'ladder-menu-container'}>
            <Menu inverted size={"mini"} fluid widths={2} className={'ladder-menu'}>
                <Menu.Item
                    className={'menu-item-top'}
                    name='Top'
                    as={Link}
                    to={linkTop}
                    active={activeMenu === 'top'}
                    onClick={() => {
                        setActiveMenu('top')
                    }}
                    color={"orange"}
                    position={"right"}>
                    <Icon name='angle double up'/>
                    Top
                </Menu.Item>
                <Menu.Item
                    className={'menu-item-extended'}
                    name='Extended'
                    as={Link}
                    to={linkExtended}
                    active={activeMenu === 'extended'}
                    onClick={() => {
                        setActiveMenu('extended')
                    }}
                    color={"orange"}
                    position={"left"}>
                    <Icon name='expand arrows alternate'/>
                    Extended
                </Menu.Item>
            </Menu>
        </Container>

        {activeMenu === 'top' && sortedWeeklyLadder ?
            <LadderTop sortedWeeklyLadder={sortedWeeklyLadder}/> : null}
        {activeMenu === 'extended' && sortedWeeklyLadder ?
            <LadderExtended sortedWeeklyLadder={sortedWeeklyLadder}/> : null}
    </div>
}

const getSortedWeeklyLadder = (weeklyLadder: WeeklyLadder) => {
    const sortedWeeklyLadder: any = {}
    sortedWeeklyLadder['week_name'] = weeklyLadder.week_name
    sortedWeeklyLadder['status'] = weeklyLadder.status
    sortedWeeklyLadder['players'] = weeklyLadder.players
    sortedWeeklyLadder['ladder'] = {'damage': {}, 'info': {}}

    for (let [k, v] of Object.entries(weeklyLadder.ladder.info[INFO_FIELDS.MONEY_GAINED.key])) {
        weeklyLadder.ladder.info[INFO_FIELDS.MONEY_DELTA.key] = weeklyLadder.ladder.info[INFO_FIELDS.MONEY_DELTA.key] || {}
        weeklyLadder.ladder.info[INFO_FIELDS.MONEY_DELTA.key][Number.parseInt(k)] =
            {
                clan_id: v.clan_id,
                name: v.name,
                uid: v.uid,
                item_value: v.item_value - weeklyLadder.ladder.info[INFO_FIELDS.MONEY_SPENT.key][Number.parseInt(k)].item_value
            }
    }

    Object.keys(weeklyLadder.ladder.info).map((k) => {
        let values = Object.values(weeklyLadder.ladder.info[k]);
        sortedWeeklyLadder.ladder.info[k] =
            values.sort((a, b) => b.item_value - a.item_value)
    })

    Object.keys(weeklyLadder.ladder.damage).map((k) => {
        const filtered = Object.values(weeklyLadder.ladder.damage[k])
            .filter((v) => k === 'acc_damage' || v.a_item_shots !== 0)

        sortedWeeklyLadder.ladder.damage[k] = filtered.sort((a, b) =>
            b.a_item_damage - a.a_item_damage)
    })

    return sortedWeeklyLadder
}