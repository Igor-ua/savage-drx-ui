import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {getDailyOnline} from "../requests";
import {getCurrentTimeSeconds, isCacheOutdated} from "../utils";
import {DAILY_CHART_TTL_SECONDS} from "../utils/constants";
import {DailySnapshot, DailyChartInfo} from "../types";

import './scss/styles-daily-chart.scss';


export const DailyChart = ({server}: DailyChartInfo) => {

    const dispatch = useDispatch()
    const dailyCache = useSelector((state: any) => state.dailyOnlineReducer, shallowEqual);
    const [dailyOnline, setDailyOnline] = useState<Array<DailySnapshot>>();
    const [chartData, setChartData] = useState<Array<any>>();

    useEffect(() => {
        if (server) {
            if (isCacheOutdated(dailyCache[server]?.ttl, dailyCache[server]?.timestamp)) {
                getDailyOnline(server).then(res => {
                    setDailyOnline(res.data);
                    dispatch({
                        type: 'SET_DAILY_ONLINE', payload:
                            {
                                [server]: {
                                    timestamp: getCurrentTimeSeconds(),
                                    ttl: DAILY_CHART_TTL_SECONDS,
                                    data: res.data
                                }
                            }
                    });
                })
            } else {
                setDailyOnline(dailyCache[server].data)
            }
        }
    }, [server]);

    useEffect(() => {
        if (dailyOnline) {

            const result = [];
            for (let i = 0; i < dailyOnline.length; i++) {
                const tooltipData: any = {};
                const item = dailyOnline[i];
                const nextItem = dailyOnline[i + 1];

                tooltipData.mapName = item.map_name;
                tooltipData.t0 = extractPlayers(item.teams[0]);
                tooltipData.t1 = extractPlayers(item.teams[1]);
                tooltipData.t2 = extractPlayers(item.teams[2]);
                if (item.teams[3]) {
                    tooltipData.t3 = extractPlayers(item.teams[3]);
                }
                if (item.teams[4]) {
                    tooltipData.t4 = extractPlayers(item.teams[4]);
                }
                result.push({x: item.timestamp * 1000, y: item.online, tooltipData: tooltipData})

                if (i < dailyOnline.length - 1) {
                    const delta = nextItem.timestamp - item.timestamp;
                    if (delta > 5_000) {
                        const tooltipDataBefore: any = {};
                        tooltipDataBefore.mapName = item.map_name;
                        tooltipDataBefore.t0 = tooltipDataBefore.t1 = tooltipDataBefore.t2 = []
                        result.push({x: item.timestamp * 1000 + 500 * 1000, y: 0, tooltipData: tooltipDataBefore});

                        const tooltipDataAfter: any = {};
                        tooltipDataAfter.mapName = nextItem.map_name;
                        tooltipDataAfter.t0 = tooltipDataAfter.t1 = tooltipDataAfter.t2 = []
                        result.push({x: nextItem.timestamp * 1000 - 500 * 1000, y: 0, tooltipData: tooltipDataAfter});
                    }
                }
            }
            setChartData(result);
        }
    }, [dailyOnline]);

    const extractPlayers = (teams: any) => {
        return teams.players.map((p: any) => {
            return p.name;
        });
    }

    const options = {
        chart: {
            type: 'spline',
            zoomType: 'x',
            height: '350px',
            backgroundColor: '#D5D0CF'
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
                formatter: (f: any) => {
                    return Highcharts.dateFormat('%H:%M', f.value);
                },
                rotation: 0
            },
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'Online'
            },
            gridLineColor: '#9c9c9c',
        },
        title: {
            text: 'Daily online'
        },
        series: [
            {
                type: 'area',
                data: chartData,
                name: 'Daily (last 24h)',
            }
        ],
        credits: {
            enabled: false
        },
        plotOptions: {
            area: {
                color: '#c28120',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'red'],
                        [1, Highcharts.color('cyan').setOpacity(0).get('rgba')]
                    ],
                },
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
            formatter: function (a: any) {
                const point = a.chart.hoverPoint;
                let result = '<b>Online:</b> ' + point.y + '<br/>';
                result += '<b>Map:</b> ' + point.tooltipData.mapName + '<br/>';
                result += '<b>Team1:</b> ' + point.tooltipData?.t1?.join(', ') + '<br/>';
                result += '<b>Team2:</b> ' + point.tooltipData?.t2?.join(', ') + '<br/>';
                result += point.tooltipData?.t3 ? '<b>Team3:</b> ' + point.tooltipData?.t3.join(', ') + '<br/>' : ''
                result += point.tooltipData?.t4 ? '<b>Team3:</b> ' + point.tooltipData?.t4.join(', ') + '<br/>' : ''
                result += '<b>Spectators:</b> ' + point.tooltipData?.t0?.join(', ') + '<br/>';
                return result;
            }
        }
    };

    return <div className={'csp-daily-chart-wrapper'}>
        <HighchartsReact highcharts={Highcharts} options={options} className={'daily-highcharts'}/>
    </div>
}