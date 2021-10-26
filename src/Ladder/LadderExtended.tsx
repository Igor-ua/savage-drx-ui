import React, {useState} from 'react'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {Container, Grid, Icon, List, Menu, Table} from "semantic-ui-react";

import {INFO_FIELDS} from "../utils/constants";
import {LadderTopProps} from "../types";
import {formatInfoValue, formatNumber, formatWeeklyPlayer} from "../utils";

import './scss/styles-ladder-extended.scss';


export const LadderExtended = ({sortedWeeklyLadder}: LadderTopProps) => {
    const [activeMenu, setActiveMenu] = useState('stats');
    const [item, setItem] = useState(INFO_FIELDS.COMM_POINTS);
    const [damageItem, setDamageItem] = useState('Hatchet');
    const weekName = sortedWeeklyLadder.week_name.split('_')[1]

    return <div className={'ladder-extended-wrapper'}>

        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"left"} width={"3"}>
                <Container className={'ladder-extended-menu-container'}>
                    <Menu inverted size={"mini"} className={'ladder-extended-menu-switcher'} widths={2}>
                        <Menu.Item
                            className={'menu-item-stats'}
                            name='stats'
                            active={activeMenu === 'stats'}
                            onClick={() => {
                                setActiveMenu('stats')
                            }}
                            color={"orange"}
                            position={"right"}>
                            <Icon name='bars'/>
                            Stats
                        </Menu.Item>
                        <Menu.Item
                            className={'menu-item-damage'}
                            name='damage'
                            active={activeMenu === 'damage'}
                            onClick={() => {
                                setActiveMenu('damage')
                            }}
                            color={"orange"}
                            position={"left"}>
                            <Icon name='sun'/>
                            Damage
                        </Menu.Item>
                    </Menu>

                    <div className={'div-list'}>
                        {
                            activeMenu === 'stats'
                                ? <List animated>
                                    {Object.entries(INFO_FIELDS).map((k, index) => {
                                        return <List.Item key={index} as={'a'} onClick={() => (setItem(k[1]))}
                                                          active={item === k[1]}
                                                          content={k[1].title}/>
                                    })}
                                </List>
                                : <List animated>
                                    {Object.entries(sortedWeeklyLadder.ladder.damage).map((k, index) => {
                                        return <List.Item key={index} as={'a'} onClick={() => (setDamageItem(k[0]))}
                                                          active={damageItem === k[0]}
                                                          content={k[0] === 'acc_damage' ? 'General Damage' : k[0]}/>
                                    })}
                                </List>
                        }
                    </div>

                </Container>
            </Grid.Column>

            <Grid.Column textAlign={"center"} width={4}>
                <Container className={"ladder-extended-table-container"}>
                    {activeMenu === 'stats'
                        ? getTable(sortedWeeklyLadder.ladder.info[item.key], item.title, item.key, sortedWeeklyLadder.week_name)
                        : getTable(sortedWeeklyLadder.ladder.damage[damageItem], damageItem, item.key, sortedWeeklyLadder.week_name)}
                </Container>
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
                <Container className={"ladder-extended-chart-container"}>
                    {activeMenu === 'stats'
                        ? getChart(sortedWeeklyLadder.ladder.info[item.key], item.title, item.key)
                        : getChart(sortedWeeklyLadder.ladder.damage[damageItem], damageItem, item.key)}
                </Container>
            </Grid.Column>
        </Grid>

    </div>
}

const getTable = (data: Array<any>, title: string, key: string, weekName: string) => {
    data = data.filter(key => key.item_value || key.a_item_damage)
    return <Table celled inverted compact
                  size={"small"}
                  className={"ladder-extended-weekly"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell collapsing colSpan="3" content={title === 'acc_damage' ? 'General Damage' : title}/>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {data.map((d: any, index: any) => (
                <Table.Row key={index}>
                    <Table.Cell collapsing textAlign={"center"}>
                        {index + 1}
                    </Table.Cell>
                    <Table.Cell textAlign={"left"}>
                        {formatWeeklyPlayer(d, weekName)}
                    </Table.Cell>
                    <Table.Cell
                        content={d.item_value ? formatInfoValue(key, d.item_value) : formatNumber(d.a_item_damage)}
                        textAlign={"left"}/>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
}

const getChart = (data: Array<any>, title: string, key: string) => {
    data = data.filter(key => key.item_value || key.a_item_damage)

    const chartData: any = data.map((d) => {
        return {
            name: d.name,
            y: d.item_value || d.a_item_damage
        }
    })

    const options = {
        chart: {
            type: 'bar',
            zoomType: 'x',
            height: chartData.length * 20 >= 400 ? (chartData.length * 20) + 'px' : 400 + 'px',
            backgroundColor: '#D5D0CF'
        },
        tooltip: {
            enabled: false
        },
        mapNavigation: {
            enableMouseWheelZoom: true
        },
        xAxis: {
            type: "category"
        },
        yAxis: {
            gridLineColor: '#9c9c9c'
        },
        title: {
            text: title
        },
        series: [
            {
                name: title,
                data: chartData,
            }
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
    return <div className={'ladder-extended-chart'}>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
}