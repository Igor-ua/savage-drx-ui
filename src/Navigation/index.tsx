import React from 'react'
import {useLocation} from 'react-router-dom'
import {Link, useRouteMatch} from "react-router-dom";

import {Icon, Menu, Sticky} from 'semantic-ui-react'
import {ROUTES} from "../utils/constants";

import './scss/styles-navigation.scss';


const Navigation = () => {
    const location = useLocation();

    const routeHomeWithPage = useRouteMatch(ROUTES.homeWithPage);
    const isHomePath = Boolean(location.pathname === ROUTES.root || routeHomeWithPage)

    const routeGameHistoryStats = useRouteMatch(ROUTES.historyTimestampTab);
    const isGameHistoryStatsPath = Boolean(location.pathname === ROUTES.history || routeGameHistoryStats)

    const routeLadderHistorical = useRouteMatch(ROUTES.ladderWeekTab);
    const routeLadderLive = useRouteMatch(ROUTES.ladderLiveTab);
    const isLadderPath = Boolean(location.pathname === ROUTES.ladder || routeLadderHistorical || routeLadderLive)

    const routePlayer = useRouteMatch(ROUTES.player);
    const routePlayerWeekly = useRouteMatch(ROUTES.playerWeekly);
    const isPlayerPath = Boolean(routePlayer || routePlayerWeekly)

    const routeStatsUid = useRouteMatch(ROUTES.searchStatsUid);
    const routeStatsName = useRouteMatch(ROUTES.searchStatsName);
    const isStatsPath = Boolean(location.pathname === ROUTES.stats || routeStatsUid || routeStatsName || isPlayerPath)

    const isOnlinePath = Boolean(location.pathname === ROUTES.online)

    const activeColor = 'orange'
    const inactiveColor = 'grey'

    return <Sticky className={'csp-navigation'}>
        <Menu inverted size={'mini'} borderless className={'csp-menu'} fixed={"top"}>
            <Menu.Item
                name='home'
                as={Link}
                to={ROUTES.root}
                position={"right"}
                color={isHomePath ? activeColor : inactiveColor}
                active={isHomePath}>
                <Icon name='home'/>
                Home
            </Menu.Item>
            <Menu.Item
                name='online'
                as={Link}
                to={ROUTES.online}
                color={isOnlinePath ? activeColor : inactiveColor}
                active={isOnlinePath}>
                <Icon name='user'/>
                Online
            </Menu.Item>
            <Menu.Item
                name='history'
                as={Link}
                to={ROUTES.history}
                color={isGameHistoryStatsPath ? activeColor : inactiveColor}
                active={isGameHistoryStatsPath}>
                <Icon name='history'/>
                History
            </Menu.Item>
            <Menu.Item
                name='ladder'
                as={Link}
                to={ROUTES.ladder}
                color={isLadderPath ? activeColor : inactiveColor}
                active={isLadderPath}>
                <Icon name='signal'/>
                Ladder
            </Menu.Item>
            <Menu.Item
                name='stats'
                as={Link}
                to={ROUTES.stats}
                position={"left"}
                color={isStatsPath ? activeColor : inactiveColor}
                active={isStatsPath}>
                <Icon name='user'/>
                Stats
            </Menu.Item>
        </Menu>
    </Sticky>
}

export default Navigation;