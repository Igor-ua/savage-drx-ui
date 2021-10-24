import React from "react";
import {Link} from "react-router-dom";

import {getCurrentWeekCode, getEndDateOfISOWeek, getShortFormattedDate, getStartDateOfISOWeek} from "../utils";
import {Button, Header, Image, Segment} from "semantic-ui-react";

import './scss/styles-live-ladder-widget.scss';


export const LiveLadderWidget = () => {
    const current_year_week = getCurrentWeekCode()
    const current_year = new Date().getFullYear()
    const current_week = current_year_week.split('_')[1]

    return <div className={'live-ladder-widget'}>
        <Segment.Group className={'live-ladder-widget-segment'}>
            <Segment className={'live-ladder-widget-segment-top'} compact>
                <Header inverted as='h4' textAlign={"left"}>
                    <Image src={process.env.PUBLIC_URL + '/images/beast_item_sixth_sense.jpg'}
                           size={"small"}
                           inline
                           className={'info-clan-icon'}/>
                    <Header.Content>
                        Weekly Ladder <span className={"current-week-header"}>#{current_week}</span>
                    </Header.Content>
                </Header>
            </Segment>
            <Segment className={'live-ladder-widget-segment-middle'} compact textAlign={"center"}>
                <div>
                    <span className={'span-widget-live'}>Live</span>: week {current_week}/{current_year}
                </div>
                <div className={'live-formatted-weeks'}>
                    {getShortFormattedDate(getStartDateOfISOWeek(Number(current_week), current_year))} - {getShortFormattedDate(getEndDateOfISOWeek(Number(current_week), current_year))}
                </div>
                <Button
                    className={'live-button'}
                    primary
                    size={"small"}
                    compact
                    fluid
                    as={Link}
                    to={'/ladder/live/top'}>
                    Current Results
                </Button>
            </Segment>
        </Segment.Group>
    </div>
}