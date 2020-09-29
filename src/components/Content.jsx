import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {useRandomBeerContext} from '../contexts/randomBeerContext';

import {abridgeText} from '../utils/format';

import './Content.css';

const Content = () => {
    const {name, description, label, breweryName, breweryId, fetchRandomBeerData} = useRandomBeerContext();

    useEffect(() => {
        fetchRandomBeerData();
    }, []);

    if (!name || !description || !breweryName || !breweryId) {
        return <p>Loading...</p>;
    }

    return (
        <section className='content'>
            <div className='label'>
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

export default Content;
