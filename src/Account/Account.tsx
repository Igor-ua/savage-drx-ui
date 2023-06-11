import React from 'react'

import BaseContainer from "../HomePage/BaseContainer";

import './scss/styles-account.scss';


const Account = () => {

    const getForm = () => {
        return <div className={'account-wrapper'}>
            TBD soon
        </div>
    }

    return <BaseContainer header={"Account Settings"} body={getForm()}/>
}

export default Account;