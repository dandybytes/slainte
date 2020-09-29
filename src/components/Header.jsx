import React from 'react';

import {RandomBeerContextProvider} from '../contexts/randomBeerContext';

import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='title'>Slainte</h1>
            <h2 className='subtitle'>
                the random{' '}
                <span role='img' aria-label='foaming beer glass emoticon'>
                    🍺
                </span>{' '}
                app
            </h2>
            <RandomBeerContextProvider>
                <button className='button'>Pour me another one!</button>
            </RandomBeerContextProvider>
        </header>
    );
};

export default Header;
