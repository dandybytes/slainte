import {urlRandomBeer} from './url';

import mockJsonData from '../data/mockData.json';

const getMockData = () => {
    console.warn('-----------------------------------------------------------------------------------');
    console.warn('!!! This app is currently using mocked data instead of actual data from the API !!!');
    console.warn('-----------------------------------------------------------------------------------');
    return mockJsonData[Math.floor(mockJsonData.length * Math.random())];
};

export const fetchRandomBeer = async () => {
    try {
        // const response = await fetch(urlRandomBeer);
        // const {data} = await response.json();
        // console.log('json.data: ', JSON.stringify(data));

        // use mock data based on sample collected from API to avoid API overuse
        const data = getMockData();

        const beerName = data?.name;
        const beerDescription = data?.style?.description;
        const breweryName = data?.breweries?.[0]?.name;
        const breweryId = data?.breweries?.[0]?.id;

        if (beerName && beerDescription && breweryName) return {beerName, beerDescription, breweryName, breweryId};
    } catch (error) {
        console.error('ERROR: fetching random beer from the API failed: ', error);
    }
};
