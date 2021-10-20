import React, {useEffect, useState} from "react";

import {getWeaponStatsTable} from "./GameHistoryStatsWeapons";
import {getGeneralDamageChart} from "./GeneralDamageChart";
import {drawableItems} from "./items";
import {ACRPlayer, WSProps} from "../types";

import './scss/styles-game-history-stats-weapons.scss';


export const WeaponStats = ({players}: WSProps) => {
    const [editedPlayers, setEditedPlayers] = useState<Array<ACRPlayer>>()

    useEffect(() => {
        players = editItemsAndPlayers(players);
        if (players.length) {
            setEditedPlayers(players);
        }
    }, [players]);

    return <div>
        {editedPlayers ? getWeaponStatsTable(editedPlayers) : null}
        <br/>
        {editedPlayers ? getGeneralDamageChart(editedPlayers) : null}
    </div>
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