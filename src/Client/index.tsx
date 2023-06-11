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
                           src={'/images/linux.png'}
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
                                    '.deb package for Debian 11/Ubuntu 22.04, 22.10 LTS/Mint/POP! OS 21.04 etc'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Download'}/>
                                <Table.Cell textAlign={"left"} content={
                                    <a href={'https://mega.nz/file/1jRGTQjA#IYV_FdstUa3OJIs5rwMhO9eTY4mnyQyJ4Pp8kJbpKQQ'}>
                                        savage-drx_2023.03.29-1.deb
                                    </a>
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Sha256'}/>
                                <Table.Cell textAlign={"left"} content={
                                    '3b849ca419bcc837587acc4c40f6e20ab89c4032c112ce60b99036963038025b'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Install with'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'sudo apt install ./savage-drx_2023.03.29-1.deb'
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
                                    <a href={'https://mega.nz/file/UmZUAS6D#sx-5X05lfHDz-_uf0IREsnmzaBuvBsrTTS0jHYOBexQ'}>
                                        savage-drx-x86_64-2023.03.29-1.flatpak
                                    </a>
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Sha256'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'da222b19bf38f4a9424886fb47c57ab5d9ca22166eca9880b4cd08f4fa8294b4'
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Install with'}/>
                                <Table.Cell textAlign={"left"}>
                                    * flatpak --user remote-add --if-not-exists flathub
                                    https://flathub.org/repo/flathub.flatpakrepo
                                    <br/>
                                    * flatpak --user install ./savage-drx-x86_64-2023.03.29-1.flatpak
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Uninstall with'}/>
                                <Table.Cell textAlign={"left"} content={
                                    'flatpak uninstall --user --delete-data org.savagedrx.savagedrx'
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
                                    <a href={'https://mega.nz/file/MjBTRCQY#mnPSstwKOS7tckNh01s0MooWsIGf9jhACYbET0QpveE'}>
                                        savage-drx_2023.03.29-1.zip
                                    </a>
                                }/>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign={"left"} content={'Sha256'}/>
                                <Table.Cell textAlign={"left"} content={
                                    '562cfa3704e307eba2e010f942153061e2e607e69dcf710d96f07d12a25a2b24'
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