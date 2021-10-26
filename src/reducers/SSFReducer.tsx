const initialState = {
    timestamp: 0,
    ttl: 0
}

export const SSFReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SSF':
            return {...state, ...action.payload}
        default:
            return state;
    }
}