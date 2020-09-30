/**
 * Brewery DB
 *
 * basics:
 * https://www.brewerydb.com/developers/docs
 *
 * random beer:
 * https://www.brewerydb.com/developers/docs/endpoint/beer-random
 *
 */

const apiKey = process.env.REACT_APP_BREWERY_DB_API_KEY;

const corsProxyPrefix = 'https://cors-anywhere.herokuapp.com/';
// const urlBase = 'https://api.brewerydb.com/v2/';
const urlBase = 'https://sandbox-api.brewerydb.com/v2/';
const urlSuffixRandomBeer = 'beer/random';
const urlSuffixHasLabels = 'hasLabels=Y';
const urlSuffixWithBreweries = 'withBreweries=Y';
const urlSuffixKey = `key=${apiKey}`;
const getRandomBeerURL = () =>
    `${corsProxyPrefix}${urlBase}${urlSuffixRandomBeer}/?${urlSuffixHasLabels}&${urlSuffixWithBreweries}&${urlSuffixKey}`;

const getBreweryDetailsURL = breweryID => `${corsProxyPrefix}${urlBase}/brewery/${breweryID}/?${urlSuffixKey}`;

export {getRandomBeerURL, getBreweryDetailsURL};
