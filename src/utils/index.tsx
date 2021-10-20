import {GameResult} from "../types";
import {weekNumber} from 'weeknumber'
import {INFO_FIELDS} from "./constants";

export const formatGameTime = (gameTime: number) => {
    const date = new Date(0);
    date.setSeconds(gameTime / 1000);
    return date.toISOString().substr(11, 8);
}

export const formatGameTimeWithDays = (gameTime: number) => {
    const date = new Date(0);
    date.setSeconds(gameTime / 1000);

    return date.toISOString().substr(8, 11);
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

export const getStartDateOfISOWeek = (week: number, year: number) => {
    const simple = new Date(year, 0, 1 + (week - 1) * 7);
    const dow = simple.getDay();
    const ISOWeekStart = simple;
    if (dow <= 4)
        ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOWeekStart;
}

export const getEndDateOfISOWeek = (week: number, year: number) => {
    const startDate = getStartDateOfISOWeek(week, year);
    const finish = new Date(startDate);
    finish.setDate(finish.getDate() + 7);
    finish.setSeconds(finish.getSeconds() - 1);
    return finish;
}

export const getFormattedDate = (d: Date) => {
    const options: any = {year: 'numeric', month: 'long', day: 'numeric'};
    return d.toLocaleDateString("en-US", options)
}

export const getShortFormattedDate = (d: Date) => {
    const options: any = {year: 'numeric', month: 'short', day: 'numeric'};
    return d.toLocaleDateString("en-US", options)
}

export function getCurrentWeekCode() {
    const now = new Date()
    const current_year = now.getFullYear()
    const current_week = weekNumber(now)
    return current_year + '_' + current_week
}

export const sliceArray = (inputArray: Array<any>, perChunk: number) => {
    return inputArray.reduce((all, one, i) => {
        const ch = Math.floor(i / perChunk);
        all[ch] = [].concat((all[ch] || []), one);
        return all
    }, [])
}

export const secondsToDhms = (seconds: number) => {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor(seconds % (3600 * 24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);

    const dDisplay = d > 0 ? d + "d " : "";
    const hDisplay = h > 0 ? h + ":" : "";
    const mDisplay = m > 0 ? m + ":" : "";
    const sDisplay = s > 0 ? s : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

export const formatNumber = (n: number) => {
    return new Intl.NumberFormat().format(n)
}

export const formatAccumulatedGameTime = (t: number) => {
    return secondsToDhms(t / 1000)
}

export const formatMoneyDelta = (t: number) => {
    return t > 0 ? "+" + formatNumber(t) : formatNumber(t)
}

export const formatInfoValue = (key: string, value: number) => {
    let result: any
    if (key === INFO_FIELDS.MONEY_DELTA.key) {
        result = formatMoneyDelta(value)
    }
    if (key === INFO_FIELDS.ON_TEAM_TIME.key) {
        result = formatAccumulatedGameTime(value)
    }
    if (key !== INFO_FIELDS.MONEY_DELTA.key && key !== INFO_FIELDS.ON_TEAM_TIME.key) {
        result = formatNumber(value)
    }
    return result
}