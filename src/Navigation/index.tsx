import React, {useState} from 'react'
import {Icon, Menu, Sticky} from 'semantic-ui-react'
import './scss/styles-navigation.scss';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('home');

    return <Sticky className={'csp-navigation'}>
        {/*icon='labeled'*/}
        <Menu inverted size={'mini'} borderless className={'csp-menu'}>
            <Menu.Item
                name='home'
                color={activeItem === 'home' ? 'red' : 'grey'}
                active={activeItem === 'home'}
                onClick={() => setActiveItem('home')}>
                <Icon name='home'/>
                Home
            </Menu.Item>
            <Menu.Item
                name='stats'
                color={activeItem === 'stats' ? 'red' : 'grey'}
                active={activeItem === 'stats'}
                onClick={() => setActiveItem('stats')}>
                <Icon name='pie graph'/>
                Stats
            </Menu.Item>
            <Menu.Item
                name='history'
                color={activeItem === 'history' ? 'red' : 'grey'}
                active={activeItem === 'history'}
                onClick={() => setActiveItem('history')}>
                <Icon name='history'/>
                History
            </Menu.Item>
        </Menu>
    </Sticky>
}

export default Navigation;