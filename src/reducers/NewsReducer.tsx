const initialState = {
    pages: 0
}

export const newsPageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return {...state, ...action.payload}
        case 'RESET_NEWS_PAGE':
            return {...initialState}
        default:
            return state;
    }
}