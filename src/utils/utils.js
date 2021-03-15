export const getWinner = (id) => {
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

export const formatGameTime = (gameTime) => {
    const date = new Date(0);
    date.setSeconds(gameTime / 1000);
    return date.toISOString().substr(11, 8);
}

export const getTeamName = (teamId, teamName, race) => {
    if (teamId === 0) {
        return `Spectators`
    }
    return `${teamName} ${capitalizeFirstLetter(race)}`
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const sortCommanders = (players) => {
    return [...players].sort(function (a, b) {
        return (a.is_commander === b.is_commander) ? 0 : a.is_commander ? -1 : 1;
    })
}

export const getWorldImage = (name) => {
    return process.env.REACT_APP_WORLD_LOCATION + name + '_overhead.jpg';
}

export const getDateInSeconds = (date) => {
    return Math.floor(date.getTime() / 1000);
}