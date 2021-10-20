import React from "react";
import {Image, Table} from "semantic-ui-react";

import {formatGameTime, formatPlayer} from "../utils";
import {CLAN_ICON_URL} from "../utils/constants";
import {GRTeam} from "../types";

import './scss/styles-game-history-stats-info.scss';


export const StatsInfoTable = (team: GRTeam) => {
    return <Table celled inverted compact selectable size={"small"} className={'game-history-stats-info'}
                  textAlign={"center"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell textAlign={"left"} className={'cell-team-name'}>
                    {team.team_name}
                </Table.HeaderCell>
                <Table.HeaderCell collapsing>Time<br/>played</Table.HeaderCell>
                <Table.HeaderCell collapsing>Experience</Table.HeaderCell>
                <Table.HeaderCell collapsing>Kills</Table.HeaderCell>
                <Table.HeaderCell collapsing>Deaths</Table.HeaderCell>
                <Table.HeaderCell collapsing>Buffs</Table.HeaderCell>
                <Table.HeaderCell collapsing>Blocks</Table.HeaderCell>
                <Table.HeaderCell collapsing>Built</Table.HeaderCell>
                <Table.HeaderCell collapsing>Dracula</Table.HeaderCell>
                <Table.HeaderCell collapsing>Damage<br/>on players</Table.HeaderCell>
                <Table.HeaderCell collapsing>Flags</Table.HeaderCell>
                <Table.HeaderCell collapsing>Kill<br/>Streak</Table.HeaderCell>
                <Table.HeaderCell collapsing>Melee<br/>kills</Table.HeaderCell>
                <Table.HeaderCell collapsing>Mined</Table.HeaderCell>
                <Table.HeaderCell collapsing>Money</Table.HeaderCell>
                <Table.HeaderCell collapsing>NPC<br/>killed</Table.HeaderCell>
                <Table.HeaderCell collapsing>Ranged<br/>kills</Table.HeaderCell>
                <Table.HeaderCell collapsing>Sacrifice</Table.HeaderCell>
                <Table.HeaderCell collapsing>Siege<br/>killed</Table.HeaderCell>
                <Table.HeaderCell collapsing>Damage<br/>on buildings</Table.HeaderCell>
                <Table.HeaderCell collapsing>Buildings<br/>destroyed</Table.HeaderCell>
            </Table.Row>
        </Table.Header>


        <Table.Body>
            {team.players.map((grPlayer, index) => {
                return grPlayer.p?.info ? <Table.Row key={index}>
                        <Table.Cell collapsing textAlign={"left"} content={formatPlayer(grPlayer)}/>
                        <Table.Cell collapsing>{formatGameTime(grPlayer.p.info.on_team_time)}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.experience}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.kills}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.deaths}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.auto_buff}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.blocks}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.build}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.carn_hp}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.client_damage}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.flag_capture}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.kill_streak}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.melee_kill}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.mine}</Table.Cell>
                        <Table.Cell collapsing>
                            {grPlayer.p.info.money_gained - grPlayer.p.info.money_spent > 0 ? '+' : ''}
                            {grPlayer.p.info.money_gained - grPlayer.p.info.money_spent}
                        </Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.npc_kill}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.ranged_kill}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.sacrifice}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.siege_kill}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.build_damage}</Table.Cell>
                        <Table.Cell collapsing>{grPlayer.p.info.build_kill}</Table.Cell>
                    </Table.Row>
                    : null
            })}
        </Table.Body>
    </Table>
}