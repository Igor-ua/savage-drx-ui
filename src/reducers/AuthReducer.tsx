import {AuthState} from "../types";

const initialState: AuthState = {
    isLoggedIn: false,
    token: null
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_AUTH':
            return {...state, ...action.payload}
        case 'RESET_AUTH':
            return {...initialState}
        default:
            return state;
    }
}