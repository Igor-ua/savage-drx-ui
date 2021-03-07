import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {useStyles} from '../css/weekly-chart-css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class WeeklyChart extends Component {
    render() {
        const {classes} = this.props;

        const data = this.props.weekly.map((x) => {
            const arr = []
            arr.push(x.timestamp * 1000)
            arr.push(x.online)
            return arr;
        });

        const options = {
            chart: {
                type: 'spline',
                zoomType: 'x',
            },
            mapNavigation: {
                enableMouseWheelZoom: true
            },
            xAxis: {
                type: "datetime",
                scrollbar: {
                    enabled: true
                },
                labels: {
                    formatter: function() {
                        return Highcharts.dateFormat('<b>%a</b> %H:%M', this.value);
                    },
                    rotation: 0
                },
            },
            yAxis: {
                title: {
                    enabled: true,
                    text: 'Online'
                },
                gridLineColor: '#b3b3b8'
            },
            title: {
                text: 'Weekly (7 days)'
            },
            series: [
                {
                    type: 'area',
                    data: data,
                }
            ],
            credits: {
                enabled: false
            },
            plotOptions: {
                area: {
                    color: '#1a8d8d',
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                },
            },
        };

        return <div className={classes.root}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    }
}

export default withStyles(useStyles)(WeeklyChart)