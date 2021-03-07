import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {useStyles} from '../css/daily-chart-css'

class DailyMapsComponent extends Component {

    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            123
        </div>
    }
}

export default withStyles(useStyles)(DailyMapsComponent)