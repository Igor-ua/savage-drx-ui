import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Main from "./Main";
import OnlineStats from "./OnlineStats";
import MapStats from "./MapStats";
import MapResult from "./MapResult";

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/online" component={OnlineStats}/>
                    <Route exact path="/maps" component={MapStats}/>
                    <Route exact path="/result/:timestamp" component={MapResult}/>
                    <Route exact path="/" component={Main}/>
                </Switch>
            </div>
        );
    }
}

export default App;