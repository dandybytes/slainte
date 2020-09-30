import {getRandomBeerURL, getBreweryDetailsURL} from './url';

import mockJsonData from '../data/mockData.json';

const getMockRandomBeerData = () => {
    console.warn('-----------------------------------------------------------------------------------');
    console.warn('!!! This app is currently using mocked data instead of actual data from the API !!!');
    console.warn('-----------------------------------------------------------------------------------');
    return mockJsonData[Math.floor(mockJsonData.length * Math.random())];
};

export const fetchRandomBeer = async () => {
    try {
        const response = await fetch(getRandomBeerURL());
        const {data} = await response.json();

        // use mock data based on sample collected from API to avoid API overuse
        // const data = getMockRandomBeerData();

        const beerID = data?.id;
        const beerName = data?.name;
        const beerDescription = data?.style?.description;
        const breweryName = data?.breweries?.[0]?.name;
        const breweryId = data?.breweries?.[0]?.id;

        return {beerID, beerName, beerDescription, breweryName, breweryId};
    } catch (error) {
        console.error('ERROR: fetching random beer from the API failed: ', error);
    }
};

export const fetchBreweryDetails = async breweryId => {
    try {
        const response = await fetch(getBreweryDetailsURL(breweryId));
        const {data} = await response.json();

        const breweryID = data?.id;
        const breweryName = data?.name;
        const breweryDescription = data?.description;
        const breweryFoundationYear = data?.established;
        const breweryImage = data?.images?.squareMedium; // {icon, large, medium, squareLarge, squareMedium}
        const breweryWebsite = data?.website;

        return {breweryID, breweryName, breweryDescription, breweryFoundationYear, breweryImage, breweryWebsite};
    } catch (error) {
        console.error('ERROR: fetching brewery details from the API failed: ', error);
    }
};
