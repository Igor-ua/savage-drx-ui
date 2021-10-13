import React from 'react'
import {useLocation} from 'react-router-dom'
import {Link, useRouteMatch} from "react-router-dom";

import {Icon, Menu, Sticky} from 'semantic-ui-react'

import './scss/styles-navigation.scss';


const Navigation = () => {
    const location = useLocation();
    const homeWithPage = useRouteMatch('/page/:p');
    const gameHistoryStats = useRouteMatch('/history/:timestamp');
    const ladderHistorical = useRouteMatch('/ladder/week/:weekName');
    const ladderLive = useRouteMatch('/ladder/live');

    const activeColor = 'orange'
    const inactiveColor = 'grey'

    return <Sticky className={'csp-navigation'}>
        <Menu inverted size={'mini'} borderless className={'csp-menu'} fixed={"top"}>
            <Menu.Item
                name='home'
                as={Link}
                to={'/'}
                position={"right"}
                color={location.pathname === '/' || homeWithPage ? activeColor : inactiveColor}
                active={location.pathname === '/' || Boolean(homeWithPage)}>
                <Icon name='home'/>
                Home
            </Menu.Item>
            <Menu.Item
                name='online'
                as={Link}
                to={'/online'}
                color={location.pathname === '/online' ? activeColor : inactiveColor}
                active={location.pathname === '/online'}>
                <Icon name='user'/>
                Online
            </Menu.Item>
            <Menu.Item
                name='history'
                as={Link}
                to={'/history'}
                color={location.pathname === '/history' || gameHistoryStats ? activeColor : inactiveColor}
                active={location.pathname === '/history' || Boolean(gameHistoryStats)}>
                <Icon name='history'/>
                History
            </Menu.Item>
            <Menu.Item
                name='ladder'
                as={Link}
                to={'/ladder'}
                position={"left"}
                color={location.pathname === '/ladder' || ladderHistorical || ladderLive ? activeColor : inactiveColor}
                active={location.pathname === '/ladder' || Boolean(ladderHistorical) || Boolean(ladderLive)}>
                <Icon name='signal'/>
                Ladder
            </Menu.Item>
        </Menu>
    </Sticky>
}

export default Navigation;