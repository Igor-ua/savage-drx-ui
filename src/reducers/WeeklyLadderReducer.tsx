const initialState = {
    timestamp: 0
}

export const weeklyLadderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_WEEKLY_LADDER':
            return {...state, ...action.payload}
        default:
            return state;
    }
}