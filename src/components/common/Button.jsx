import React from 'react';

import {useRandomBeerContext} from '../../contexts/randomBeerContext';

import './Button.css';

const Button = ({children}) => {
    const {updateRandomBeerDataInContext} = useRandomBeerContext();

    return (
        <button className='button' onClick={updateRandomBeerDataInContext}>
            {children}
        </button>
    );
};

export default Button;
