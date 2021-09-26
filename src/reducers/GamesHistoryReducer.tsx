import {GameResult} from "../types";

const initialState = {
    timestamp: 0,
    ttl: 0,
    data: Array<GameResult>()
}

export const gamesHistoryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_GAMES_RESULT':
            return {...state, ...action.payload}
        default:
            return state;
    }
}