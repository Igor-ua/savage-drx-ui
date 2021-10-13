import React, {useEffect, useState} from 'react'
import {Container, Icon, Menu} from "semantic-ui-react";
import {useParams, useRouteMatch} from "react-router-dom";

import {LadderTop} from "./LadderTop";
import {LadderExtended} from "./LadderExtended";
import {getLiveWeeklyLadder, getWeeklyLadder} from "../requests";
import {WeeklyLadder} from "../types";

import './scss/styles-ladder.scss';


export const Ladder = () => {
    const isLive = useRouteMatch('/ladder/live');
    const params: any = useParams();
    const weekName = params?.weekName;
    const [activeMenu, setActiveMenu] = useState('top');
    const [weeklyLadder, setWeeklyLadder] = useState<WeeklyLadder>();

    console.log(weeklyLadder)

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

    return <div className={'ladder-wrapper'}>
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

        {activeMenu === 'top' ? <LadderTop/> : null}
        {activeMenu === 'extended' ? <LadderExtended/> : null}
    </div>
}