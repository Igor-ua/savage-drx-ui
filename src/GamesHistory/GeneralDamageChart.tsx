import React from "react";
import {ACRPlayer} from "../types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import './scss/styles-general-damage-chart.scss';


export const getGeneralDamageChart = (players: Array<ACRPlayer>) => {

    [...players].sort((a, b) => b.generalDamage - a.generalDamage);
    const chartData: any = players.map((p) => {
        return {
            name: p.name,
            y: p.generalDamage
        }
    })

    const options = {
        chart: {
            type: 'column',
            zoomType: 'x',
            height: '500px',
            backgroundColor: '#D5D0CF'
        },
        tooltip: {
            enabled: false
        },
        mapNavigation: {
            enableMouseWheelZoom: true
        },
        xAxis: {
            type: "category",
            scrollbar: {
                enabled: true
            },
        },
        yAxis: {
            title: {
                enabled: true,
                text: 'Damage'
            },
            gridLineColor: '#9c9c9c',
        },
        title: {
            text: 'General damage'
        },
        series: [
            {
                name: 'General damage',
                data: chartData,
                // colorByPoint: true
            },
        ],
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        }
    };

    return <div className={'general-damage-chart-wrapper'}>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
}