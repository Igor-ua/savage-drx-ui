import {GameResult} from "../types";

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