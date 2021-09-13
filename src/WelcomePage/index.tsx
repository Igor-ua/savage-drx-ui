import React from 'react'
import './scss/styles-wp.scss';
import Navigation from "../Navigation";
import TableExampleStructured from "../TestPage/TableExampleStructured";

const WelcomePage = () => {
    return <div className={'welcome-page'} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/welcome-page-background.jpg'})`
    }}>
        <Navigation/>
        <div className={'msg'}>
            <TableExampleStructured/>
            <br />
            <TableExampleStructured/>
            <br />
            <TableExampleStructured/>
            <br />
            <TableExampleStructured/>
            <br />
            <TableExampleStructured/>
            <br />
            <TableExampleStructured/>
            <br />
            <TableExampleStructured/>
            <br />
        </div>
    </div>
}

export default WelcomePage;