import React, {createContext, useContext, useState, useCallback} from 'react';

import {fetchBreweryDetails} from '../services/fetch';
import {placeholderImageUrl} from '../data/urls';

export const BreweryDetailsContext = createContext();

export const BreweryDetailsContextProvider = ({children}) => {
    const [breweryID, setBreweryID] = useState('');
    const [breweryName, setBreweryName] = useState('');
    const [breweryDescription, setBreweryDescription] = useState('');
    const [breweryFoundationYear, setBreweryFoundationYear] = useState('');
    const [breweryImage, setBreweryImage] = useState(placeholderImageUrl);
    const [breweryWebsite, setBreweryWebsite] = useState('');

    const updateBreweryDetailsInContext = async breweryId => {
        const data = await fetchBreweryDetails(breweryId);
        setBreweryID(data.breweryID);
        setBreweryName(data.breweryName);
        setBreweryDescription(data.breweryDescription);
        setBreweryFoundationYear(data.breweryFoundationYear);
        setBreweryImage(data.breweryImage || placeholderImageUrl);
        setBreweryWebsite(data.breweryWebsite);
    };

    return (
        <BreweryDetailsContext.Provider
            value={{
                breweryID,
                breweryName,
                breweryDescription,
                breweryFoundationYear,
                breweryImage,
                breweryWebsite,
                updateBreweryDetailsInContext: useCallback(updateBreweryDetailsInContext)
            }}
        >
            {children}
        </BreweryDetailsContext.Provider>
    );
};

export const useBreweryDetailsContext = () => useContext(BreweryDetailsContext);
