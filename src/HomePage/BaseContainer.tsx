import React from 'react'
import {Header, Segment} from "semantic-ui-react";

import {BaseContainerProps} from "../types";

import './scss/styles-base-container.scss'


const BaseContainer = ({header, body, footer}: BaseContainerProps) => {

    return <div className={'home-page-base-container'}>
        {
            header
                ? <Segment textAlign={"center"} className={'header-segment'}>
                    <Header as={'h4'} content={header}/>
                </Segment>
                : null
        }

        {
            body
                ? <Segment textAlign='center' content={body}/>
                : null
        }

        {
            footer
                ? <Segment textAlign='center' content={footer}/>
                : null
        }

    </div>
}

export default BaseContainer