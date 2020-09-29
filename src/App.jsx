import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import RandomBeerPage from './components/pages/RandomBeerPage';
import BreweryDetailsPage from './components/pages/BreweryDetailsPage';

import './App.css';

function App() {
    return (
        <main className='app'>
            <BrowserRouter>
                <Switch>
                    <Route path='/brewery/:id' exact component={BreweryDetailsPage} />
                    <Route component={RandomBeerPage} />
                </Switch>
            </BrowserRouter>
        </main>
    );
}

export default App;
