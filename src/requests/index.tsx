import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_URL;

export const getDiscordServerInfo = () => {
    return axios.get(`https://discord.com/api/guilds/511261029838225419/widget.json`)
}

export const getLiveServerInfo = (server: string) => {
    return axios.get(`${SERVER_URL}/stats/live?server=${server}`)
}

export const getWeeklyOnline = (server: string) => {
    return axios.get(`${SERVER_URL}/stats/online/weekly?server=${server}`)
}

export const getDailyOnline = (server: string) => {
    return axios.get(`${SERVER_URL}/stats/online/daily?server=${server}`)
}

export const getGameResults = (quantity: number) => {
    return axios.get(`${SERVER_URL}/stats/results/${quantity}`)
}

export const getGameResultByTimestamp = (timestamp: number) => {
    return axios.get(`${SERVER_URL}/stats/result/${timestamp}`)
}