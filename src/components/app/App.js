import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import AComponent from "./../A.react";
import BComponent from "./../B.react";

import './../../css/App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={["/", "/a"]} component={AComponent}/>
                    <Route exact path="/b" component={BComponent}/>
                </Switch>
            </div>
        );
    }
}

export default App;