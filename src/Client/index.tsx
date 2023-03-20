import React from "react"

import {Grid, Header, Image, Segment, Table} from "semantic-ui-react"

import './scss/styles-client.scss'


const Client = () => {

    return <div className={'csp-client-wrapper'}>
        <Segment textAlign={"center"} className={'client-header-segment'}>
            <Header as={'h4'} inverted>
                Savage DRX
                <Header.Subheader>
                    (open beta)
                </Header.Subheader>
            </Header>
        </Segment>
        <Grid columns="equal" textAlign={"center"}>
            <Grid.Column textAlign={"left"}>
                <Segment textAlign={"center"} className={'windows-segment'}>
                    <Image className={"platform-image"}
                           src={process.env.PUBLIC_URL + '/images/windows.png'}
                           rounded
                           inline
                           centered
                    />

                    {/*Windows*/}
                    <Table celled inverted compact
                           size={"small"}
                           className={'platform-table'}
                           textAlign={"center"}>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Download #1'}/>
                                <Table.Cell textAlign={"left"} content={
                                    <a href={'https://mega.nz/file/t7hnyDIL#AL1aJZNi_ZQR7XhYGSZx9vzXVnhZVuUkR4YnnPZM_n4'}>
                                        drx_setup-1.03-cl_win_prod.exe
                                    </a>
                                }/>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                </Segment>
            </Grid.Column>
            <Grid.Column textAlign={"left"}>
                <Segment textAlign={"center"} className={'linux-segment'}>
                    <Image className={"platform-image"}
                           src={process.env.PUBLIC_URL + '/images/linux.png'}
                           rounded
                           inline
                           centered
                    />

                    {/*Deb*/}
                    <Table celled inverted compact
                           size={"small"}
                           className={'platform-table'}
                           textAlign={"center"}>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} width={"3"} content={'Type'}/>
                                <Table.Cell textAlign={"left"} content={
                                    '.deb package for Debian 11/Ubuntu 20.04LTS/Mint/POP! OS 21.04'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Download'}/>
                                <Table.Cell textAlign={"left"} content={
                                    <a href={'https://mega.nz/file/5m5imRhS#5aMcSPXeLfbcdmqPRFfYJ-pmHqYyjWLQKa6exvEf1zA'}>
                                        savage-drx_2022.03.09-1.deb
                                    </a>
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Sha256'}/>
                                <Table.Cell textAlign={"left"} content={
                                    '751419c7f4c3c1dde78862d40138ecde54fea9d63d110540cf6c0389463c8518'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Install with'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'sudo apt install ./savage-drx_2022.03.09-1.deb'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Uninstall with'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'sudo apt remove savage-drx'
                                }/>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    {/*Flatpak*/}
                    <Table celled inverted compact
                           size={"small"}
                           className={'platform-table'}
                           textAlign={"center"}>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} width={"3"} content={'Type'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'Flatpak bundle'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Download'}/>
                                <Table.Cell textAlign={"left"} content={
                                    <a href={'https://mega.nz/file/16IAjTDD#Kay2GbJUc4iWRPn_OSQf48xVatKUaDgPoBU0nJJFZuE'}>
                                        savagedrx-x86_64-2022.03.09-1.flatpak
                                    </a>
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Sha256'}/>
                                <Table.Cell textAlign={"left"} content={
                                    '51b3315a7e686af86d234f78503a3c51c993ff3e8f721ea7af6db52168ac2677'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Install with'}/>
                                <Table.Cell textAlign={"left"}>
                                    * flatpak --user remote-add --if-not-exists flathub
                                    https://flathub.org/repo/flathub.flatpakrepo
                                    <br/>
                                    * flatpak --user install ./savagedrx-x86_64-2022.03.09-1.flatpak
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Uninstall with'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'flatpak uninstall --user --delete-data org.newerth.savagedrx'
                                }/>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    {/*Manual*/}
                    <Table celled inverted compact
                           size={"small"}
                           className={'platform-table'}
                           textAlign={"center"}>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} width={"3"} content={'Type'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'Standalone zip, I\'ll sort out the dependencies myself'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Download'}/>
                                <Table.Cell textAlign={"left"} content={
                                    <a href={'https://mega.nz/file/x6h1DZBC#eFVXumBCZC6rVS-oMebIyuS4Vi1Qip0rHDtWj9AcPbE'}>
                                        savage-drx_2022.03.09-1.zip
                                    </a>
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Sha256'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'b5e9a63f6584617859c29e16e18fdeea9969840dc87fb641d5d471d83072e169'
                                }/>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
            </Grid.Column>
        </Grid>
        <Segment textAlign={"center"} className={'details-segment'}>
            <div className={'details-div'}>
                A list of the general improvements: tbd
            </div>
            <div>
                Ask for help in discord <span className={'discord-setup-questions'}>#setup-questions</span> channel
            </div>
        </Segment>
    </div>
}

export default Client