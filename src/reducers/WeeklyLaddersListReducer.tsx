const initialState = {
    timestamp: 0,
    ttl: 0
}

export const weeklyLaddersListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_WEEKLY_LADDERS_LIST':
            return {...state, ...action.payload}
        default:
            return state;
    }
}