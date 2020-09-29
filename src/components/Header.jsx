import React from 'react';

import './Header.css';

const Header = ({handleButtonClick}) => {
    return (
        <header className='header'>
            <h1 className='title'>The Random 🍺 App</h1>
            <button className='button' onClick={handleButtonClick}>
                Show Another Beer
            </button>
        </header>
    );
};

export default Header;
