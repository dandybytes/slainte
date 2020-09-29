import React, {useEffect, useState} from 'react';

import Header from './Header';
import Content from './Content';

import {fetchRandomBeer} from '../services/fetch';

const placeholderImageUrl = 'https://touch.daft.ie/static/images/fallbacks/no-image-size740x480.jpg';

const RandomBeer = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState(placeholderImageUrl);
    const [brewery, setBrewery] = useState('');

    useEffect(() => {
        getRandomBeerData();
    }, []);

    const getRandomBeerData = async () => {
        const {beerName, beerDescription, beerBrewery} = await fetchRandomBeer();
        if (beerName) setName(beerName);
        if (beerDescription) setDescription(beerDescription);
        if (beerBrewery) setBrewery(beerBrewery);
    };

    if (!name || !description || !brewery) {
        return <p>Loading beer data...</p>;
    }

    return (
        <>
            <Header handleButtonClick={getRandomBeerData} />
            <Content name={name} description={description} brewery={brewery} label={label} />
        </>
    );
};

export default RandomBeer;
