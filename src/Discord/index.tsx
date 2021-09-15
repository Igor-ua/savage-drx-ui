import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {DiscordInfo} from "../types";
import './scss/styles-discord.scss';
import {Icon, Segment, Header, Label, List, Button} from "semantic-ui-react";

const getDiscordServerInfo = () => {
    return axios.get(`https://discord.com/api/guilds/511261029838225419/widget.json`)
}

const Discord = () => {
    const [discordServerInfo, setDiscordServerInfo] = useState<DiscordInfo>();

    useEffect(() => {
        getDiscordServerInfo().then(res => {
            setDiscordServerInfo(res.data);
        })
    }, []);

    return <div className={'csp-discord-wrapper'}>
        <Segment.Group className={'csp-discord-widget'} piled>
            <Segment inverted className={'discord-segment-top'}>
                <Header as='h4' textAlign={"center"}>
                    <Icon name='discord' size={"big"}/>
                    <Header.Content>
                        Discord
                        <Label className={'online-label'} color='red' size={"small"} pointing={"left"}>
                            online {discordServerInfo?.presence_count}
                        </Label>
                    </Header.Content>
                </Header>

            </Segment>
            <Segment inverted className={'discord-users-list customized-scrollbar'}>
                <List>
                    {discordServerInfo?.members.map((member) => (
                        <div key={member.username}>
                            <img src={member.avatar_url}/>
                            <span>{member.username}</span>
                        </div>
                    ))}
                </List>
            </Segment>
            <Segment inverted textAlign='center' className={'discord-segment-bottom'}>
                <Button secondary
                        size={"small"}
                        compact
                        fluid
                        onClick={() => {
                        }}
                        as={'a'}
                        href='https://discord.com/invite/Hu6MavHK?utm_source=Discord%20Widget&utm_medium=Connect'
                        target={'_blank'}>
                    Connect
                </Button>
            </Segment>
        </Segment.Group>

        <br/>
        {/*<iframe src={"https://discord.com/widget?id=511261029838225419&theme=dark"}*/}
        {/*        width={"250"}*/}
        {/*        height={"400"}*/}
        {/*        frameBorder={"0"}*/}
        {/*        sandbox={"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}>*/}
        {/*</iframe>*/}
    </div>

}

export default Discord;