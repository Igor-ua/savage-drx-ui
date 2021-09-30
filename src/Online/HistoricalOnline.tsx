import React, {useState} from 'react'
import {Container, Grid, Icon, Menu, Segment} from "semantic-ui-react";

import {WeeklyChart} from "./WeeklyChart";
import {DailyChart} from "./DailyChart";
import {DailyMembers} from "./DailyMembers";

import './scss/styles-historical-online.scss';


export const HistoricalOnline = () => {
    const [serverName, setServerName] = useState('nl')

    return <div className={'csp-historical-online-wrapper'}>
        <div className={'grid-wrapper'}>
            <Grid columns='equal'>

                <Grid.Column width={2} className={'grid-column'}>
                    <Container>
                        <Segment className={'menu-segment'}>
                            <Menu borderless secondary vertical inverted size={"mini"} className={'menu-servers'}>
                                <Menu.Item header>Servers</Menu.Item>
                                <Menu.Item
                                    name='nl'
                                    active={serverName === 'nl'}
                                    onClick={() => {
                                        setServerName("nl")
                                    }}>
                                    <Icon name='server'/>
                                    Europe (NL)
                                </Menu.Item>

                                <Menu.Item
                                    name='us'
                                    active={serverName === 'us'}
                                    onClick={() => {
                                        setServerName("us")
                                    }}>
                                    <Icon name='server'/>
                                    USA (Dallas)
                                </Menu.Item>
                            </Menu>
                        </Segment>
                    </Container>
                </Grid.Column>

                <Grid.Column width={14} className={'grid-column'}>
                    <Grid columns='equal'>
                        <Grid.Column width={5} className={'grid-column-green'}>
                            <DailyMembers server={serverName}/>
                        </Grid.Column>
                        <Grid.Column width={11} className={'grid-column-green'}>
                            <DailyChart server={serverName}/>
                            <br/>
                            <WeeklyChart server={serverName}/>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>

            </Grid>
        </div>
    </div>
}