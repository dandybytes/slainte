import React from 'react';
import {Link} from 'react-router-dom';

import {abridgeText} from '../utils/format';

import './Content.css';

const Content = ({name, description, breweryName, breweryId, label}) => {
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
