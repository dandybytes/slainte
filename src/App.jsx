import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {RandomBeerContextProvider} from './contexts/randomBeerContext';
import {BreweryDetailsContextProvider} from './contexts/breweryDetailsContext';

import RandomBeerPage from './components/pages/RandomBeerPage';
import BreweryDetailsPage from './components/pages/BreweryDetailsPage';

import './App.css';

function App() {
    return (
        <main className='app'>
            <RandomBeerContextProvider>
                <BreweryDetailsContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/brewery/:id' exact component={BreweryDetailsPage} />
                            <Route component={RandomBeerPage} />
                        </Switch>
                    </BrowserRouter>
                </BreweryDetailsContextProvider>
            </RandomBeerContextProvider>
        </main>
    );
}

export default App;
