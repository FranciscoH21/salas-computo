import React from 'react'

import Banner from '../assets/img/banner.jpg'

export const Header = () => (
    <header className='container'>
        <div className="content has-text-centered">
            <img src={Banner} alt='banner' />
        </div>
    </header>
)