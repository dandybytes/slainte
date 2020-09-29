import React from 'react';

import './Header.css';

const Header = ({handleButtonClick}) => {
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
            <button className='button' onClick={handleButtonClick}>
                Pour me another one!
            </button>
        </header>
    );
};

export default Header;
