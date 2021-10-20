import React from "react";
import {Image, Label, Table} from "semantic-ui-react";

import {CLAN_ICON_URL} from "../utils/constants";
import {drawableItems} from "./items";
import {ACRPlayer, EGRAccuracy} from "../types";

import './scss/styles-game-history-stats-weapons.scss';
import {formatPlayer} from "../utils";


export const getWeaponStatsTable = (players: Array<ACRPlayer>) => {
    return <div className={'game-history-stats-weapons'}>
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
                        <Table.Cell textAlign={"left"} content={formatPlayer(p)}/>
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
    return value ? Math.round(value.hits / value.shots * 100) + `% (${value.hits}/${value.shots})` : null;
}