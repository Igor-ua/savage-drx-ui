import axios from 'axios'
import {EmailConfirmationProps, EmailTokenRenewProps, LoginProps, RegistrationProps} from "../types";

const SERVER_URL = process.env.REACT_APP_API_URL

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
    const formData = new FormData();
    formData.append('username', loginProps.username);
    formData.append('password', loginProps.password);

    return axios.post(`${SERVER_URL}/metaserver/v2/oauth2/login`, formData,
        {
            headers: {
                'x-token': loginProps.token
            }
        })
}

export const sendRegistrationRequest = (props: RegistrationProps) => {
    return axios.post(`${SERVER_URL}/metaserver/v2/oauth2/register`, {
        'username': props.username,
        'display_name': props.display_name,
        'password': props.password
    }, {
        headers: {
            'x-token': props.token
        }
    })
}

export const sendCheckDisplayName = (displayName: string) => {
    return axios.get(`${SERVER_URL}/metaserver/v2/oauth2/register/name`, {params: {name: displayName}})
}

export const sendEmailConfirmationRequest = (props: EmailConfirmationProps) => {
    return axios.post(`${SERVER_URL}/metaserver/v1/user/email/verify`,
        {'mail_token': props.mail_token},
        {
            auth: {
                'username': props.username,
                'password': props.password
            }
        })
}

export const sendRenewEmailRequest = (props: EmailTokenRenewProps) => {
    return axios.post(`${SERVER_URL}/metaserver/v1/user/email/renew-token`,
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
//     return axios.get(`${SERVER_URL}/metaserver/v1/user/by-id`,
//         {
//             params: {user_id: userId},
//             headers: headers
//         })
// }