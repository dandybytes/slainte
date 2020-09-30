import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {useRandomBeerContext} from '../contexts/randomBeerContext';

import {abridgeText} from '../utils/format';

import './RandomBeerContent.css';

const RandomBeerContent = () => {
    const {
        beerID,
        name,
        description,
        label,
        breweryName,
        breweryId,
        updateRandomBeerDataInContext
    } = useRandomBeerContext();

    useEffect(() => {
        if (!beerID || !breweryName || !breweryId) updateRandomBeerDataInContext();
    }, [beerID, updateRandomBeerDataInContext, breweryName, breweryId]);

    if (!name || !description || !breweryName || !breweryId) {
        return <p>Loading...</p>;
    }

    return (
        <section className='content'>
            <div className='image'>
                <img src={label} alt={name} />
            </div>
            <div className='text'>
                <h2 className='name'>{name}</h2>
                <h3 className='brewery'>
                    <Link to={`brewery/${breweryId}`}>{breweryName}</Link>
                </h3>
                <p className='description'>{abridgeText(description)}</p>
            </div>
        </section>
    );
};

export default RandomBeerContent;
