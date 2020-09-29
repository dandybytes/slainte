import React from 'react';

import {abridgeText} from '../utils/format';

import './Content.css';

const Content = ({name, description, brewery, label}) => {
    return (
        <section className='content'>
            <div className='label'>
                <img src={label} alt={name} />
            </div>
            <div className='text'>
                <h2 className='name'>{name}</h2>
                <h3 className='brewery'>{brewery}</h3>
                <p className='description'>{abridgeText(description)}</p>
            </div>
        </section>
    );
};

export default Content;
