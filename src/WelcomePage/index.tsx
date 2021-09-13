import React from 'react'
import './scss/styles-wp.scss';

const WelcomePage = () => {
    return <div className={'welcome-page'} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/welcome-page-background.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:   'cover',
        backgroundPosition: 'center center'
    }}>
        WelcomePage
    </div>
}

export default WelcomePage;