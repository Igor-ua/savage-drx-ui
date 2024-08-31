import jwt from "jwt-decode";

import {AuthState, BearerToken, OAuthResponse} from "../types";
import {LOCAL_STORAGE_TOKEN, ROUTES} from "./constants";


export const updateAuthState = (dispatch: any, auth: AuthState) => {
    if (!auth.isLoggedIn) {
        const cred = localStorage.getItem(LOCAL_STORAGE_TOKEN)
        if (cred) {
            const token: BearerToken = jwt(cred)
            dispatch({
                type: 'UPDATE_AUTH', payload:
                    {
                        isLoggedIn: true,
                        token: token
                    }
            });
        }
    }
}

export const updateAuthStateOnLogin = (dispatch: any, authResponse: OAuthResponse | undefined) => {
    if (authResponse) {
        const json_cred = JSON.stringify(authResponse.accessToken)
        if (json_cred) {
            localStorage.setItem(LOCAL_STORAGE_TOKEN, json_cred);
            const token: BearerToken = jwt(json_cred)
            dispatch({
                type: 'UPDATE_AUTH', payload:
                    {
                        isLoggedIn: true,
                        token: token
                    }
            });
            return true;
        }
    }
    return false;
}

export const logOut = (dispatch: any, history: any) => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN)
    dispatch({type: 'RESET_AUTH'});
    history.push(ROUTES.root)
}
