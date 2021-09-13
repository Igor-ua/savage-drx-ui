import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Main from "./Main";
import OnlineStats from "./OnlineStats";
import MapResult from "./MapResultWrapper";
import GamesHistory from "./GamesHistory";
import WelcomePage from "../WelcomePage";

class App extends Component {

    render() {
        return (
            // <div>123</div>
            <div>
                <Switch>
                    {/*<Route exact path="/" component={Main}/>*/}
                    <Route exact path="/" component={WelcomePage}/>
                    {/*<Route exact path="/online" component={OnlineStats}/>*/}
                    {/*<Route exact path="/result/:timestamp" component={MapResult}/>*/}
                    {/*<Route exact path="/history" component={GamesHistory}/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;