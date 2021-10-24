import React from "react";
import {Button, Image, Segment} from "semantic-ui-react";

import './scss/styles-patreon-widget.scss';


export default () => {
    return <div className={'patreon-widget'}>
        <Segment.Group className={'patreon-widget-segment'}>
            <Segment className={'patreon-widget-segment-top'} compact textAlign={"center"}>
                <Image src={process.env.PUBLIC_URL + '/images/patreon-logo.png'}/>
            </Segment>
            <Segment className={'patreon-widget-segment-middle'} compact textAlign={"center"}>
                <div className={'body-text'}>
                    Support us on:
                    patreon.com/community_server
                </div>
                <Image src={process.env.PUBLIC_URL + '/images/patreon-sav.jpg'} className={'sav-img'}/>
                <Button
                    primary
                    className={'patreon-join-button'}
                    size={"small"}
                    compact
                    fluid
                    as={'a'}
                    href='https://www.patreon.com/community_server'
                    target={'_blank'}>
                    Join
                </Button>
            </Segment>
        </Segment.Group>
    </div>
}