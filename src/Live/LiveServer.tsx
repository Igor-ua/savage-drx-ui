import React, {useEffect, useState} from 'react'
import {Button, Grid, Header, Icon, Label, Segment} from "semantic-ui-react";

import {getLiveServersInfo} from "../requests";
import {LiveServerInfo, LiveProps} from "../types";

import './scss/styles-live-panel.scss';
import {Link} from "react-router-dom";

export const LiveServer = () => {

    return <div>
        LiveServer
    </div>
}