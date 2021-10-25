import React from 'react'
import {Route, Switch} from "react-router-dom";

import HomePage from "../HomePage";
import Navigation from "../Navigation";
import Player from "../Player";
import Stats from "../Stats";
import Server from '../Server';
import About from '../About';
import {HistoricalOnline} from "../Online";
import {GameHistoryStats, GamesHistory} from "../GamesHistory";
import {Ladder, LadderHomePage} from "../Ladder";
import {ROUTES} from "../utils/constants";

import './scss/styles-generic.scss';


export default () => {
    return <div className={'app-container'} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/main-background.jpg'})`
    }}>
        <Navigation/>
        <Switch>
            <Route exact path={ROUTES.root} component={HomePage}/>
            <Route exact path={ROUTES.homeWithPage} component={HomePage}/>
            <Route exact path={ROUTES.online} component={HistoricalOnline}/>
            <Route exact path={ROUTES.history} component={GamesHistory}/>
            <Route exact path={ROUTES.historyTimestampTab} component={GameHistoryStats}/>
            <Route exact path={ROUTES.ladder} component={LadderHomePage}/>
            <Route exact path={ROUTES.ladderWeekTab} component={Ladder}/>
            <Route exact path={ROUTES.ladderLiveTab} component={Ladder}/>
            <Route exact path={ROUTES.stats} component={Stats}/>
            <Route exact path={ROUTES.searchStatsUid} component={Stats}/>
            <Route exact path={ROUTES.searchStatsName} component={Stats}/>
            <Route exact path={ROUTES.player} component={Player}/>
            <Route exact path={ROUTES.playerWeekly} component={Player}/>
            <Route exact path={ROUTES.servers} component={Server}/>
            <Route exact path={ROUTES.about} component={About}/>
        </Switch>
    </div>
};