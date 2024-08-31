import axios from 'axios'
import {EmailConfirmationProps, EmailTokenRenewProps, LoginProps, RegistrationProps} from "../types";

const SERVER_URL = process.env.REACT_APP_API_URL
const J_SERVER = `${SERVER_URL}/metaserver`

// for local testing
// const J_SERVER = `${SERVER_URL}`
// const J_SERVER = `${SERVER_URL}/jserver`


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

export const getA2sServerInfo = (serverAddress: string) => {
    return axios.get(`${SERVER_URL}/stats/server/${serverAddress}`)
}

export const sendLoginRequest = (loginProps: LoginProps) => {
    return axios.post(`${J_SERVER}/v1/oauth2/login`, {},
        {
            auth: {
                username: loginProps.username,
                password: loginProps.password
            },
            headers: {
                'X-Token': loginProps.token
            }
        })
}

export const sendRegistrationRequest = (props: RegistrationProps) => {
    return axios.post(`${J_SERVER}/v1/oauth2/register`, {
        'userName': props.userName,
        'displayName': props.displayName,
        'password': props.password
    }, {
        headers: {
            'X-Token': props.token
        }
    })
}

export const sendCheckDisplayName = (displayName: string) => {
    return axios.get(`${J_SERVER}/v1/oauth2/verify/name`, {params: {name: displayName}})
}

export const sendEmailConfirmationRequest = (props: EmailConfirmationProps) => {
    return axios.post(`${J_SERVER}/v1/oauth2/email/verify`,
        {'mail_token': props.mail_token},
        {
            auth: {
                'username': props.username,
                'password': props.password
            }
        })
}

export const sendRenewEmailRequest = (props: EmailTokenRenewProps) => {
    return axios.post(`${J_SERVER}/v1/oauth2/email/token/renew`,
        {},
        {
            auth: {
                'username': props.username,
                'password': props.password
            }
        })
}


// test-data
// export const getUserByIdRequest = (headers: any, userId: number) => {
//     return axios.get(`${J_SERVER}/v1/user/by-id`,
//         {
//             params: {user_id: userId},
//             headers: headers
//         })
// }