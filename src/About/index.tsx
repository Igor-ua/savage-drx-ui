import React from "react";
import {List, Segment} from "semantic-ui-react";

import './scss/styles-about.scss'


const About = () => {

    return <div className={'csp-about-wrapper'}>
        <Segment textAlign={"left"} className={'about-segment'} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/weapons/human_unit_medic.jpg'})`
        }}>
            <div className={'div-contacts'}>
                Contacts:
            </div>
            <List verticalAlign={"middle"} className={'contacts-list'}>
                <List.Item>
                    <List.Icon name='discord' size={"big"} color={"orange"}/>
                    <List.Content>drk#3931 (358270891299307521)</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='discord' size={"big"} color={"orange"}/>
                    <List.Content>
                        <a href={'https://tinyurl.com/drxdiscord'} className={'link-discord'}>
                            https://tinyurl.com/drxdiscord
                        </a>
                    </List.Content>
                </List.Item>
            </List>
            <div className={'written-by'}>
                Created in 2021
            </div>
        </Segment>

    </div>
}

export default About