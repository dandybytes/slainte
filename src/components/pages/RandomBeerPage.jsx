import React from 'react';

import {RandomBeerContextProvider} from '../../contexts/randomBeerContext';

import Header from '../Header';
import Content from '../Content';

const RandomBeer = () => {
    return (
        <>
            <Header />
            <RandomBeerContextProvider>
                <Content />
            </RandomBeerContextProvider>
        </>
    );
};

export default RandomBeer;
