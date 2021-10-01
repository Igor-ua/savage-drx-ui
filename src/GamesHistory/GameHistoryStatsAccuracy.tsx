import React from "react";
import {Image, Label, Table} from "semantic-ui-react";

import {CLAN_ICON_URL} from "../utils/constants";
import {drawableItems} from "./items";
import {ACRPlayer, EGRAccuracy} from "../types";

import './scss/styles-game-history-stats-accuracy.scss';


export const StatsAccuracyTable = (players: Array<ACRPlayer>) => {
    players = editItemsAndPlayers(players);
    if (!players.length) {
        return null;
    }

    console.log(players)

    return <div className={'game-history-stats-accuracy'}>
        <Table celled inverted compact={"very"} selectable size={"small"} textAlign={"center"}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell className={'cell-header-info'}>
                        <Label size={"tiny"} className={'th-info-label'}>
                            Accuracy % (hits/shots*100)<br/>
                            <span className={'th-info-label-span'}>Damage</span>
                        </Label>
                    </Table.HeaderCell>

                    {players[0].accuracies.map((a, index) => (
                        <Table.HeaderCell key={index}>
                            <Image src={drawableItems[a.name]}
                                   size={"small"}
                                   inline
                                   className={'header-item-image'}/>
                        </Table.HeaderCell>
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
                            <Table.Cell key={index}>
                                {getAccuracyByValue(acr.value)}
                                <br/>
                                {acr.value && acr.value.damage > 0
                                    ? <span className={'cell-span-damage'}>{acr.value.damage}</span>
                                    : null
                                }
                            </Table.Cell>
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

const editItemsAndPlayers = (players: Array<ACRPlayer>) => {
    const items = Object.keys(drawableItems)
    const filteredPlayers = Array<ACRPlayer>()

    players.map((p) => {
        const acr = p.accuracies.filter((acr) => acr.value)

        let generalDamage = 0;
        p.accuracies.forEach((a) => {
            if (a.value) {
                generalDamage += a.value.damage;
            }
        })

        if (acr.length) {
            p.accuracies = p.accuracies.filter((a) => items.includes(a.name));
            p.generalDamage = generalDamage;
            filteredPlayers.push(p)
        }
    })

    return filteredPlayers;
}