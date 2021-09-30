import React from 'react'
import {Route, Switch} from "react-router-dom";

import HomePage from "../HomePage";
import Navigation from "../Navigation";
import {HistoricalOnline} from "../Online";
import {GameHistoryStats, GamesHistory} from "../GamesHistory";

import './scss/styles-app.scss';


export default () => {
    return <div className={'app-container'} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/main-background.jpg'})`
    }}>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/page/:p" component={HomePage}/>
            <Route exact path="/online" component={HistoricalOnline}/>
            <Route exact path="/history" component={GamesHistory}/>
            <Route exact path="/history/:timestamp" component={GameHistoryStats}/>
        </Switch>
    </div>
};