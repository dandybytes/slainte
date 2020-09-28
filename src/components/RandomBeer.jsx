import React, {useEffect, useState} from 'react';

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
            <header>
                <h1>The Random Beer App</h1>
                <button onClick={() => getRandomBeerData()}>Show Another Beer</button>
            </header>
            <p>name: {name}</p>
            <p>description: {description}</p>
            <p>brewery: {brewery}</p>
            <img src={label} alt={name} />
        </>
    );
};

export default RandomBeer;
