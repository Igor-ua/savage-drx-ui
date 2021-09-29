import {DailySnapshot} from "../types";

const initialState = {
    nl: {
        timestamp: 0,
        ttl: 0,
        data: Array<DailySnapshot>(),
    },
    us: {
        timestamp: 0,
        ttl: 0,
        data: Array<DailySnapshot>(),
    },
}

export const dailyOnlineReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_DAILY_ONLINE':
            return {...state, ...action.payload}
        default:
            return state;
    }
}