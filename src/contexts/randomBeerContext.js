import React, {createContext, useContext, useState, useCallback} from 'react';

import {fetchRandomBeer} from '../services/fetch';
import {placeholderImageUrl} from '../data/urls';

export const RandomBeerContext = createContext();

export const RandomBeerContextProvider = ({children}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState(placeholderImageUrl);
    const [breweryName, setBreweryName] = useState('');
    const [breweryId, setBreweryId] = useState('');

    const fetchRandomBeerData = async () => {
        const data = await fetchRandomBeer();
        setName(data?.beerName);
        setDescription(data?.beerDescription);
        setBreweryName(data?.breweryName);
        setBreweryId(data?.breweryId);
    };

    return (
        <RandomBeerContext.Provider
            value={{
                name,
                description,
                label,
                breweryName,
                breweryId,
                fetchRandomBeerData: useCallback(fetchRandomBeerData)
            }}
        >
            {children}
        </RandomBeerContext.Provider>
    );
};

export const useRandomBeerContext = () => useContext(RandomBeerContext);
