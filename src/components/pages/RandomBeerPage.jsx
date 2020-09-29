import React, {useEffect, useState} from 'react';

import Header from '../Header';
import Content from '../Content';

import {fetchRandomBeer} from '../../services/fetch';

import {placeholderImageUrl} from '../../data/urls';

const RandomBeer = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState(placeholderImageUrl);
    const [breweryName, setBreweryName] = useState('');
    const [breweryId, setBreweryId] = useState('');

    useEffect(() => {
        getRandomBeerData();
    }, []);

    const getRandomBeerData = async () => {
        const fetchedRandomBeerData = await fetchRandomBeer();
        setName(fetchedRandomBeerData?.beerName);
        setDescription(fetchedRandomBeerData?.beerDescription);
        setBreweryName(fetchedRandomBeerData?.breweryName);
        setBreweryId(fetchedRandomBeerData?.breweryId);
    };

    if (!name || !description || !breweryName) {
        return <p>Loading beer data...</p>;
    }

    return (
        <>
            <Header handleButtonClick={getRandomBeerData} />
            <Content
                name={name}
                description={description}
                breweryName={breweryName}
                breweryId={breweryId}
                label={label}
            />
        </>
    );
};

export default RandomBeer;
