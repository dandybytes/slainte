import React from 'react';

import Title from './common/Title';
import Subtitle from './common/Subtitle';
import Button from './common/Button';

import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Title>Slainte</Title>
            <Subtitle>
                the random{' '}
                <span role='img' aria-label='foaming beer glass emoticon'>
                    🍺
                </span>{' '}
                app
            </Subtitle>

            <Button>Pour me another one!</Button>
        </header>
    );
};

export default Header;
