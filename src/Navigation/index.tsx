import React, {useState} from 'react'
import {Menu, Segment, Sticky} from 'semantic-ui-react'
import './scss/styles-nv.scss';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('home');

    return <Sticky className={'navigation'}>
        <Segment inverted>
            <Menu inverted secondary size={'mini'} stackable={true}>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name={'home'}
                        key={'home'}
                        active={activeItem === 'home'}
                        onClick={() => setActiveItem('home')}
                        // color={'red'}
                    />
                    <Menu.Item
                        name={'messages'}
                        key={'messages'}
                        active={activeItem === 'messages'}
                        onClick={() => setActiveItem('messages')}
                        // color={'red'}
                    />
                    <Menu.Item
                        name={'friends'}
                        key={'friends'}
                        active={activeItem === 'friends'}
                        onClick={() => setActiveItem('friends')}
                        // color={'red'}
                    />
                </Menu.Menu>
            </Menu>
        </Segment>
    </Sticky>
}

export default Navigation;