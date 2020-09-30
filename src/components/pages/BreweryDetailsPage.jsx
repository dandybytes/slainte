import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {useBreweryDetailsContext} from '../../contexts/breweryDetailsContext';

import './BreweryDetailsPage.css';

const BreweryDetailsPage = ({match}) => {
    const queryParamID = match.params.id;
    const {
        breweryID,
        breweryName,
        breweryDescription,
        breweryFoundationYear,
        breweryImage,
        breweryWebsite,
        updateBreweryDetailsInContext
    } = useBreweryDetailsContext();

    useEffect(() => {
        if (!breweryID || breweryID !== queryParamID) updateBreweryDetailsInContext(queryParamID);
    }, [queryParamID, breweryID, updateBreweryDetailsInContext]);

    return (
        <section className='brewery-details'>
            <Link className='back' to='/'>
                &#8630; back to random beer
            </Link>
            <img className='brewery-logo' src={breweryImage} alt={`${breweryName} brewery logo`} />
            <h2 className='name'>{breweryName}</h2>
            <p>(established in {breweryFoundationYear})</p>
            <a href={breweryWebsite}>{breweryWebsite}</a>
            <p className='description'>{breweryDescription}</p>
        </section>
    );
};

export default BreweryDetailsPage;
