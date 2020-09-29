import React from 'react';

import './Content.css';

const Content = ({name, description, brewery, label}) => {
    return (
        <section className='content'>
            <div className='label'>
                <img src={label} alt={name} />
            </div>
            <div className='text'>
                <p className='name'>name: {name}</p>
                <p className='description'>description: {description}</p>
                <p className='brewery'>brewery: {brewery}</p>
            </div>
        </section>
    );
};

export default Content;
