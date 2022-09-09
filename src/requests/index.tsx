import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_URL;

export const getDiscordServerInfo = () => {
    return axios.get(`https://discord.com/api/guilds/511261029838225419/widget.json`)
}

export const getLiveServersInfo = () => {
    return axios.get(`${SERVER_URL}/stats/live`)
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

export const getNewsByPage = (page: number) => {
    return axios.get(`${SERVER_URL}/news/${page}`)
}

export const getWeeklyLadder = (week_name: string) => {
    return axios.get(`${SERVER_URL}/stats/ladder/${week_name}`)
}

export const getLiveWeeklyLadder = () => {
    return axios.get(`${SERVER_URL}/stats/ladder/live`)
}

export const getSSF = (uid: number) => {
    return axios.get(`${SERVER_URL}/stats/ssf/${uid}`)
}

export const searchSSFByUid = (uid: number) => {
    return axios.get(`${SERVER_URL}/stats/ssf/search/uid/${uid}`)
}

export const searchSSFByName = (nick: string) => {
    return axios.get(`${SERVER_URL}/stats/ssf/search/name/${nick}`)
}

export const getLadderWeeks = (year: number) => {
    return axios.get(`${SERVER_URL}/stats/ladder/weeks/${year}`)
}