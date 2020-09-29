import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Content from '../Content';

import {placeholderImageUrl} from '../../data/urls';

const BreweryDetailsPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [label, setLabel] = useState(placeholderImageUrl);
    const [brewery, setBrewery] = useState('');

    return (
        <>
            <Link to='/'>&#8630; back to random beer details</Link>
            <Content name={name} description={description} brewery={brewery} label={label} />
        </>
    );
};

export default BreweryDetailsPage;
