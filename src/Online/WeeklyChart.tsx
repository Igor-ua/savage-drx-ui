import React, {useEffect, useState} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {getWeeklyOnline} from "../requests";
import {WeeklySnapshot, WeeklyChartInfo} from "../types";
import {WEEKLY_CHART_TTL_SECONDS} from "../utils/constants";
import {getCurrentTimeSeconds, isCacheOutdated} from "../utils";

import './scss/styles-weekly-chart.scss';

export const WeeklyChart = ({server}: WeeklyChartInfo) => {

    const dispatch = useDispatch()
    const weeklyCache = useSelector((state: any) => state.weeklyOnlineReducer, shallowEqual);
    const [weeklyOnline, setWeeklyOnline] = useState<Array<WeeklySnapshot>>();
    const [chartData, setChartData] = useState<Array<Array<any>>>()

    useEffect(() => {
        if (server) {
            if (isCacheOutdated(weeklyCache[server]?.ttl, weeklyCache[server]?.timestamp)) {
                getWeeklyOnline(server).then(res => {
                    setWeeklyOnline(res.data);
                    dispatch({
                        type: 'SET_WEEKLY_RESULT', payload:
                            {
                                [server]: {
                                    timestamp: getCurrentTimeSeconds(),
                                    ttl: WEEKLY_CHART_TTL_SECONDS,
                                    data: res.data
                                }
                            }
                    });
                })
            } else {
                setWeeklyOnline(weeklyCache[server].data)
            }
        }
    }, [server]);


    useEffect(() => {
        if (weeklyOnline) {
            const result = [];
            for (let i = 0; i < weeklyOnline.length; i++) {
                const arr = [];
                arr.push(weeklyOnline[i].timestamp * 1000);
                arr.push(weeklyOnline[i].online);
                result.push(arr);

                // adding zero online points in case when publisher does not send anything for a long time
                if (i < weeklyOnline.length - 1) {
                    const delta = weeklyOnline[i + 1].timestamp - weeklyOnline[i].timestamp;
                    if (delta > 5_000) {
                        const before = [];
                        before.push(weeklyOnline[i].timestamp * 1000 + 500 * 1000);
                        before.push(0);
                        result.push(before);

                        const after = [];
                        after.push(weeklyOnline[i + 1].timestamp * 1000 - 500 * 1000);
                        after.push(0);
                        result.push(after);
                    }
                }
            }
            setChartData(result);
        }
    }, [weeklyOnline]);

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
                formatter: (data: any) => Highcharts.dateFormat('<b>%a</b> %H:%M', data.value),
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
            text: 'Weekly online'
        },
        series: [
            {
                type: 'area',
                name: 'Weekly (last 7 days)',
                data: chartData,
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
        }
    };

    return <div className={'csp-weekly-chart-wrapper'}>
        <HighchartsReact highcharts={Highcharts} options={options} className={'weekly-highcharts'}/>
    </div>
}