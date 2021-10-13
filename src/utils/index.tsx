import {GameResult} from "../types";
import { weekNumber } from 'weeknumber'

export const formatGameTime = (gameTime: number) => {
    const date = new Date(0);
    date.setSeconds(gameTime / 1000);
    return date.toISOString().substr(11, 8);
}

export const getWinner = (id: number) => {
    if (id === 0) {
        return 'Draw'
    }
    if (id === 1) {
        return 'Human'
    }
    if (id === 2) {
        return 'Beast'
    }
}

export const addCommanders = (gameResults: Array<GameResult>) => {
    gameResults.map((gr) => {
        Object.values(gr.game.teams).forEach((team) => {
            team.players.map((p) => {
                if (p.is_commander) {
                    team.commander_name = p.name;
                    team.commander_clan_id = p.clan_id;
                }
            })
        })
    });
    return gameResults;
}

export const getCurrentTimeSeconds = () => {
    return Math.round(new Date().getTime() / 1000);
}

export const isCacheOutdated = (ttl: number, timestamp: number) => {
    if (!ttl || !timestamp) {
        return true;
    }
    const currentTime = getCurrentTimeSeconds();
    return currentTime > ttl + timestamp;
}

export const getTeamName = (teamId: number, teamName: string, race: string) => {
    if (teamId === 0) {
        return `Spectators`
    }
    return `${teamName} ${capitalizeFirstLetter(race)}`
}

export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getStartDateOfISOWeek(week: number, year: number) {
    const simple = new Date(year, 0, 1 + (week - 1) * 7);
    const dow = simple.getDay();
    const ISOWeekStart = simple;
    if (dow <= 4)
        ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOWeekStart;
}

export function getEndDateOfISOWeek(week: number, year: number) {
    const startDate = getStartDateOfISOWeek(week, year);
    const finish = new Date(startDate);
    finish.setDate(finish.getDate() + 7);
    finish.setSeconds(finish.getSeconds() - 1);
    return finish;
}

export function getFormattedDate(d: Date) {
    const options: any = {year: 'numeric', month: 'long', day: 'numeric'};
    return d.toLocaleDateString("en-US", options)
}

export function getCurrentWeekCode() {
    const now = new Date()
    const current_year = now.getFullYear()
    const current_week = weekNumber(now)
    return current_year + '_' + current_week
}
