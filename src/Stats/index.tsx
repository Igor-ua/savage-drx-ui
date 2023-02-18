import React, {useEffect, useState} from "react"
import {Link, useHistory, useParams} from "react-router-dom"
import {Button, Form, Grid, Header, Icon, Segment, Table} from "semantic-ui-react"

import {formatPlayer} from "../utils"
import {searchSSFByName, searchSSFByUid} from "../requests"
import {SearchableSSFPlayer} from "../types"
import {ROUTES} from "../utils/constants"

import './scss/styles-stats.scss'


const Stats = () => {
    const history = useHistory()
    const params: any = useParams()
    const uidParam = params?.uid
    const nameParam = params?.name
    const [uid, setUid] = useState(uidParam || '')
    const [name, setName] = useState(nameParam || '')
    const [players, setPlayers] = useState<Array<SearchableSSFPlayer>>()

    useEffect(() => {
        if (players) {
        }
    }, [players]);

    useEffect(() => {
        if (nameParam || uidParam) {
            if (nameParam?.length > 1) {
                searchSSFByName(nameParam).then((res) => {
                    setPlayers(res.data)
                })
            } else if (uidParam && Number(uidParam) > 0) {
                searchSSFByUid(uidParam).then((res) => {
                    setPlayers(res.data)
                })
            }
        }
    }, [nameParam, uidParam]);

    return <div className={'csp-stats-wrapper'}>
        <Segment textAlign={"center"} className={'stats-header-segment'}>
            <Header as={'h4'} inverted className={'stats-header'}>
                General Stats
            </Header>
        </Segment>
        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"left"} width={"5"}>
                <Segment textAlign={"center"} className={'stats-form-segment'}>
                    <Header as={'h4'} content={'Search'}/>
                    <Form size={'tiny'}>
                        <Form.Field>
                            <Form.Input
                                className={'nick-input'}
                                placeholder='Nick'
                                name='nick'
                                value={name}
                                required={false}
                                onChange={(e, {name, value}) => {
                                    setName(value)
                                }}
                            />
                            OR
                            <Form.Input
                                placeholder='UID'
                                name='uid'
                                value={uid}
                                required={false}
                                onChange={(e, {name, value}) => {
                                    setUid(value)
                                }}
                            />
                        </Form.Field>
                    </Form>
                    <Button
                        floated={"right"}
                        primary
                        icon
                        labelPosition='right'
                        size={"mini"}
                        type='submit'
                        as={Link}
                        to={name?.length > 1
                            ? '/stats/search/name/' + name
                            : uid && uid > 0
                                ? '/stats/search/uid/' + uid
                                : '/stats'}>
                        <Icon name='bars'/>
                        Search
                    </Button>
                    <Button
                        floated={"left"}
                        negative
                        icon
                        labelPosition='right'
                        size={"mini"}
                        type='button'
                        onClick={() => {
                            setPlayers([])
                            setUid('')
                            setName('')
                            history.push(ROUTES.stats)
                        }}>
                        <Icon name='close'/>
                        Reset
                    </Button>
                </Segment>
            </Grid.Column>
            <Grid.Column textAlign={"left"}>
                <Segment textAlign={"center"} className={'stats-results-segment'}>
                    <Header as={'h4'}>
                        Search results{players?.length ? ': ' + players?.length : null}
                    </Header>
                    {players?.length ? getTable(players) : null}
                </Segment>
            </Grid.Column>
        </Grid>
    </div>
}

const getTable = (data: Array<SearchableSSFPlayer>) => {
    return <Table celled inverted compact selectable
                  size={"small"}
                  className={"table-ssf-searchable"}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell collapsing content={'#'}/>
                <Table.HeaderCell collapsing content={'uid'}/>
                <Table.HeaderCell collapsing content={'Player'}/>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {data.map((p: SearchableSSFPlayer, index: any) => (
                <Table.Row key={index}>
                    <Table.Cell collapsing textAlign={"center"} content={index + 1}/>
                    <Table.Cell textAlign={"left"}>
                        <Link to={'/player/' + p.uid} className={'link-color'}>
                            {p.uid}
                        </Link>
                    </Table.Cell>
                    <Table.Cell textAlign={"left"}>
                        {formatPlayer(p)}
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
}

export default Stats