import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {useStyles} from '../css/daily-chart-css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const extractPlayers = (teams) => {
    return teams.players.map((p) => {
        return p.name;
    });
}

class WeeklyChart extends Component {

    render() {
        const {classes} = this.props;
        const data = this.props.daily.map((x) => {
            const tooltipData = {}
            tooltipData.mapName = x.map_name;
            tooltipData.t0 = extractPlayers(x.teams[0]);
            tooltipData.t1 = extractPlayers(x.teams[1]);
            tooltipData.t2 = extractPlayers(x.teams[2]);
            if (x.teams[3]) {
                tooltipData.t3 = extractPlayers(x.teams[3]);
            }
            if (x.teams[4]) {
                tooltipData.t4 = extractPlayers(x.teams[4]);
            }

            return {x: x.timestamp * 1000, y: x.online, tooltipData: tooltipData};
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
                        return Highcharts.dateFormat('%H:%M', this.value);
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
                text: 'Daily (last 24h)'
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
                    color: '#c28120',
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
            tooltip: {
                formatter: function() {
                    let result = '<b>Online:</b> ' + this.point.y + '<br/>';
                    result += '<b>Map:</b> ' + this.point.tooltipData.mapName + '<br/>';
                    result += '<b>Team1:</b> ' + this.point.tooltipData.t1.join(', ') + '<br/>';
                    result += '<b>Team2:</b> ' + this.point.tooltipData.t2.join(', ') + '<br/>';
                    result += this.point.tooltipData?.t3 ? '<b>Team3:</b> ' + this.point.tooltipData.t3.join(', ') + '<br/>' : ''
                    result += this.point.tooltipData?.t4 ? '<b>Team3:</b> ' + this.point.tooltipData.t4.join(', ') + '<br/>' : ''
                    result += '<b>Spectators:</b> ' + this.point.tooltipData.t0.join(', ') + '<br/>';
                    return result;
                }
            }
        };

        return <div className={classes.root}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    }
}

export default withStyles(useStyles)(WeeklyChart)