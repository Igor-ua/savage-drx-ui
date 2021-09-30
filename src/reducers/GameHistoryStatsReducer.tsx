const initialState = {}


export const gameHistoryStatsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_GAME_HISTORY_STATS':
            return {...state, ...action.payload}
        default:
            return state;
    }
}