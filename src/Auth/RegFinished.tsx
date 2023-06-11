import React from 'react'
import {Link} from "react-router-dom";
import {Header, Icon} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

import {ROUTES} from "../utils/constants";

import './scss/styles-registration.scss';


const RegFinished = () => {

    return <div className={'reg-finished-wrapper'}>
        <Icon name="chevron down" className={"icon-valid input-icon"} size={"huge"}/>
        <Icon name="address card" size={"huge"} color={"green"}/>
        <div className={'text-block'}>
            <Header as='h2'>Congratulations!</Header>
            <HeaderSubHeader>Your registration is complete.</HeaderSubHeader>
        </div>
        <Link to={ROUTES.root} className={'link-color link-finished'}>
            <Icon name={'home'}/>
            Home
        </Link>
    </div>
}

export default RegFinished;