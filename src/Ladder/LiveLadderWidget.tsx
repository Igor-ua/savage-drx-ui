import React from "react";
import {Header, Image, Segment} from "semantic-ui-react";

import './scss/styles-live-ladder-widget.scss';
import {CLAN_ICON_URL} from "../utils/constants";

export const LiveLadderWidget = () => {
    return <div className={'live-ladder-widget'}>
        <Segment.Group className={'live-ladder-widget-segment'}>
            <Segment className={'live-ladder-widget-segment-top'} compact>

                <Header inverted as='h4' textAlign={"left"}>
                    <Image src={process.env.PUBLIC_URL + '/images/beast_item_sixth_sense.jpg'}
                           size={"small"}
                           inline
                           className={'info-clan-icon'}/>
                    <Header.Content>
                        Weekly Ladder
                    </Header.Content>
                </Header>
            </Segment>
            <Segment className={'live-ladder-widget-segment-middle'} compact>
                123
            </Segment>
        </Segment.Group>
    </div>
}