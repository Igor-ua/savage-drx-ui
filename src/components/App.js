import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Main from "./Main";
import Results from "./Results";

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/results" component={Results}/>
                    <Route exact path="/" component={Main}/>
                </Switch>
            </div>
        );
    }
}

export default App;