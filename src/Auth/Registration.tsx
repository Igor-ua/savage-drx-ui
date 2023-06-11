import React from 'react'
import {useRouteMatch} from "react-router-dom";

import BaseContainer from "../HomePage/BaseContainer";
import RegDisplayNameForm from "./RegDisplayNameForm";
import RegEmailForm from "./RegEmailForm";
import RegFinished from "./RegFinished";
import {ROUTES} from "../utils/constants";

import './scss/styles-registration.scss';


const Registration = () => {

    const isBaseRegistrationPath = Boolean(useRouteMatch(ROUTES.registration)?.isExact)
    const isEmailConfirmationPath = Boolean(useRouteMatch(ROUTES.confirmEmail)?.isExact)
    const isRegistrationFinishedPath = Boolean(useRouteMatch(ROUTES.registrationFinished)?.isExact)

    const getForm = () => {
        return <div className={'registration-wrapper'}>
            {isBaseRegistrationPath ? <RegDisplayNameForm response={null}/> : null}
            {isEmailConfirmationPath ? <RegEmailForm/> : null}
            {isRegistrationFinishedPath ? <RegFinished/> : null}
        </div>
    }

    return <BaseContainer header={"Sign up"} body={getForm()}/>
}

export default Registration;