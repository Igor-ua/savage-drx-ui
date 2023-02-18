import React from "react"
import {Flag, Grid, Header, Image, Segment, Table} from "semantic-ui-react"

import './scss/styles-server.scss'


const Server = () => {

    return <div className={'csp-server-wrapper'}>
        <Segment textAlign={"center"} className={'server-header-segment'}>
            <Header as={'h4'} inverted className={'server-header'}>
                Game Servers
            </Header>
        </Segment>
        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"left"}>
                <Segment textAlign={"center"} className={'nl-info-segment'}>
                    <Flag name='nl'/> Netherlands, Naaldwijk
                    <Image className={"server-location-image"}
                           src={process.env.PUBLIC_URL + '/images/nl-server-location.png'}
                           rounded
                           inline
                           centered
                    />
                    {serverInfoTable(
                        'Dedicated',
                        '89.39.105.27:11235',
                        'Intel(R) Core(TM) i5-2500K CPU @ 3.30GHz',
                        '4/1604',
                        '4GB DDR3',
                        '1x 120GB SSD',
                        '100Mbit/s, 50TB, 40 Gbit/s DDoS protection'
                    )}
                </Segment>
            </Grid.Column>
            <Grid.Column textAlign={"left"}>
                <Segment textAlign={"center"} className={'us-info-segment'}>
                    <Flag name='us'/> USA, Dallas
                    <Image className={"server-location-image"}
                           src={process.env.PUBLIC_URL + '/images/us-server-location.png'}
                           rounded
                           inline
                           centered
                    />
                    {serverInfoTable(
                        'VPS',
                        '146.71.77.100:11235',
                        'QEMU Virtual CPU version 2.5+',
                        '1/2599.996',
                        '1GB DDR3',
                        '1x 25GB SSD',
                        '100Mbit/s, 1TB'
                    )}
                </Segment>
            </Grid.Column>
        </Grid>
        <Segment textAlign={"center"} className={'server-traffic-segment'}>
            <div className={'server-traffic-div'}>
                <Flag name='nl'/>Server Traffic (Netherlands)
            </div>
            <Grid columns="equal" textAlign={"center"}>
                <Grid.Column>
                    <Image className={"traffic-year-image"}
                           src={process.env.PUBLIC_URL + '/images/traffic-year.png'}
                           rounded
                           inline
                           centered
                    />
                </Grid.Column>
                <Grid.Column>
                    <Image className={"traffic-month-image"}
                           src={process.env.PUBLIC_URL + '/images/traffic-month.png'}
                           rounded
                           inline
                           centered
                    />
                </Grid.Column>
            </Grid>
        </Segment>
    </div>
}

const serverInfoTable = (serverType: string,
                         ipAddress: string,
                         cpuModel: string,
                         cpuCores: string,
                         ram: string,
                         disc: string,
                         network: string) => {
    return <Table celled inverted compact
                  size={"small"}
                  className={'server-info-table'}
                  textAlign={"center"}>
        <Table.Body>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'Type'}/>
                <Table.Cell collapsing textAlign={"left"} content={serverType}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'IP-Address:Port'}/>
                <Table.Cell collapsing textAlign={"left"} content={ipAddress}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'CPU Model'}/>
                <Table.Cell collapsing textAlign={"left"} content={cpuModel}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'CPU Cores/MHz'}/>
                <Table.Cell collapsing textAlign={"left"} content={cpuCores}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'RAM'}/>
                <Table.Cell collapsing textAlign={"left"} content={ram}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'Disc'}/>
                <Table.Cell collapsing textAlign={"left"} content={disc}/>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing textAlign={"left"} content={'Network'}/>
                <Table.Cell collapsing textAlign={"left"} content={network}/>
            </Table.Row>
        </Table.Body>
    </Table>
}

export default Server