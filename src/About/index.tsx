import React from "react";
import {Icon, List, Segment} from "semantic-ui-react";

import './scss/styles-about.scss'


export default () => {

    return <div className={'csp-about-wrapper'}>
        <Segment textAlign={"left"} className={'about-segment'}>
            <div>
                Contacts:
            </div>
            <List verticalAlign={"middle"} className={'contacts-list'}>
                <List.Item>
                    <List.Icon name='discord' size={"big"} color={"orange"}/>
                    <List.Content>drk#3931 (358270891299307521)</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='discord' size={"big"} color={"orange"}/>
                    <List.Content>tinyurl.com/xrdiscord</List.Content>
                </List.Item>
            </List>
            <div className={'written-by'}>
                Written by drk in 2021
            </div>
        </Segment>

    </div>
}