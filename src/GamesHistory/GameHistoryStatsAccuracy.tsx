import React from "react";
import {Image, Table} from "semantic-ui-react";

import {CLAN_ICON_URL} from "../utils/constants";
import {ACRPlayer, EGRAccuracy} from "../types";

import './scss/styles-game-history-stats-accuracy.scss';


export const StatsAccuracyTable = (players: Array<ACRPlayer>) => {
    players = filterItems(players);
    return <div className={'game-history-stats-accuracy'}>
        <Table celled inverted compact selectable size={"small"} textAlign={"center"}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell className={'cell-player-name'}>Player</Table.HeaderCell>
                    {players[0].accuracies.map((a, index) => (
                        <Table.HeaderCell key={index}>{a.name}</Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {players.map((p, index) => (
                    <Table.Row key={index}>
                        <Table.Cell textAlign={"left"}>
                            {p.clan_id ? <Image src={CLAN_ICON_URL + p.clan_id + '.png'}
                                                size={"small"}
                                                inline
                                                className={'info-clan-icon'}/>
                                : null}
                            <span>{p.name}</span>
                        </Table.Cell>
                        {p.accuracies.map((acr, index) => (
                            <Table.Cell key={index}>{getAccuracyByValue(acr.value)}</Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </div>
}

const getAccuracyByValue = (value: EGRAccuracy) => {
    if (value) {
        return Math.round(value.hits / value.shots * 100) + `% (${value.hits}/${value.shots})`;
    }
    return null;
}

const filterItems = (players: Array<ACRPlayer>) => {
    const itemsToRemove = [
        'desc 0',
        'Hatchet',
        'Saber',
        'Venomous',
        'Rabid',
        'Disrupter',
        'Bone sword',
        'Uprooted Tree',
        'Land Mine',
        'Battle axe',
        'Predator claws',
        'Sacrifice',
        'Demolition Charge',
        'Fire Ward',
        'Immobilizer',
        'Blessed Potion',
        'Staff',
        'Stalker claws',
        'Mana Crystal',
        'Carnivorous'
    ]

    players.map((p) => {
        p.accuracies = p.accuracies.filter((a) => !itemsToRemove.includes(a.name));
    })

    return players;
}