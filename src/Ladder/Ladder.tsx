import React, {useEffect, useState} from 'react'
import {Container, Icon, Menu, Segment} from "semantic-ui-react";
import {useParams, useRouteMatch} from "react-router-dom";

import {LadderTop} from "./LadderTop";
import {LadderExtended} from "./LadderExtended";
import {getLiveWeeklyLadder, getWeeklyLadder} from "../requests";
import {SortedWeeklyLadder, WeeklyLadder} from "../types";

import './scss/styles-ladder.scss';
import {INFO_FIELDS} from "../utils/constants";


export const Ladder = () => {
    const isLive = useRouteMatch('/ladder/live');
    const params: any = useParams();
    const weekName = params?.weekName;
    const [activeMenu, setActiveMenu] = useState('top');
    const [weeklyLadder, setWeeklyLadder] = useState<WeeklyLadder>();
    const [sortedWeeklyLadder, setSortedWeeklyLadder] = useState<SortedWeeklyLadder>();

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
            const sortedWeeklyLadder: any = {}
            sortedWeeklyLadder['week_name'] = weeklyLadder.week_name
            sortedWeeklyLadder['status'] = weeklyLadder.status
            sortedWeeklyLadder['players'] = weeklyLadder.players
            sortedWeeklyLadder['ladder'] = {'damage': {}, 'info': {}}

            for (let [k, v] of Object.entries(weeklyLadder.ladder.info[INFO_FIELDS.MONEY_GAINED])) {
                weeklyLadder.ladder.info[INFO_FIELDS.MONEY_DELTA] = weeklyLadder.ladder.info[INFO_FIELDS.MONEY_DELTA] || {}
                weeklyLadder.ladder.info[INFO_FIELDS.MONEY_DELTA][Number.parseInt(k)] =
                    {
                        clan_id: v.clan_id,
                        name: v.name,
                        uid: v.uid,
                        item_value: v.item_value - weeklyLadder.ladder.info[INFO_FIELDS.MONEY_SPENT][Number.parseInt(k)].item_value
                    }
            }

            Object.keys(weeklyLadder.ladder.info).map((k) => {
                let values = Object.values(weeklyLadder.ladder.info[k]);
                sortedWeeklyLadder.ladder.info[k] =
                    values.sort((a, b) => b.item_value - a.item_value)
            })

            Object.keys(weeklyLadder.ladder.damage).map((k) => {
                const flt = Object.values(weeklyLadder.ladder.damage[k])
                    .filter((v) => v.a_item_shots !== 0)

                sortedWeeklyLadder.ladder.damage[k] = flt.sort((a, b) =>
                    b.a_item_damage - a.a_item_damage)
            })

            setSortedWeeklyLadder(sortedWeeklyLadder)
        }
    }, [weeklyLadder]);

    return <div className={'ladder-wrapper'}>

        <Segment textAlign={"center"}>
            Week #{weeklyLadder?.week_name}
        </Segment>

        <Container className={'ladder-menu-container'}>
            <Menu inverted size={"mini"} fluid widths={2} className={'ladder-menu'}>
                <Menu.Item
                    className={'menu-item-top'}
                    name='Top'
                    active={activeMenu === 'top'}
                    onClick={() => {
                        setActiveMenu('top')
                    }}
                    color={"orange"}
                    position={"right"}>
                    <Icon name='bars'/>
                    Top
                </Menu.Item>
                <Menu.Item
                    className={'menu-item-extended'}
                    name='Extended'
                    active={activeMenu === 'extended'}
                    onClick={() => {
                        setActiveMenu('extended')
                    }}
                    color={"orange"}
                    position={"left"}>
                    <Icon name='target'/>
                    Extended
                </Menu.Item>
            </Menu>
        </Container>

        {activeMenu === 'top' && sortedWeeklyLadder ? <LadderTop sortedWeeklyLadder={sortedWeeklyLadder}/> : null}
        {activeMenu === 'extended' && sortedWeeklyLadder ? <LadderExtended/> : null}
    </div>
}