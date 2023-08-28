const countries = [
    {
        name: 'Afghanistan',
        region: 'Asia',
        currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
        capital: 'Kabul',
        population: 40218234,
        area: 652230
    },
    {
        name: 'Aland Islands',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Mariehamn',
        population: 28875,
        area: 1580
    },
    {
        name: 'Albania',
        region: 'Europe',
        currencies: [{ code: 'ALL', name: 'Albanian lek' }],
        capital: 'Tirana',
        population: 2837743,
        area: 28748
    },
    {
        name: 'Algeria',
        region: 'Africa',
        currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
        capital: 'Algiers',
        population: 44700000,
        area: 2381741
    },
    {
        name: 'American Samoa',
        region: 'Oceania',
        currencies: [{ code: 'USD', name: 'United States Dollar' }],
        capital: 'Pago Pago',
        population: 55197,
        area: 199
    },
    {
        name: 'Andorra',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Andorra la Vella',
        population: 77265,
        area: 468
    },
    {
        name: 'Angola',
        region: 'Africa',
        currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
        capital: 'Luanda',
        population: 32866268,
        area: 1246700
    },
    {
        name: 'Anguilla',
        region: 'Americas',
        currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
        capital: 'The Valley',
        population: 13452,
        area: 91
    }
];

// Exercise 1

const getPopulation = (arrayCountries) => {
    const sumPopulation = arrayCountries.reduce((acc, currentPopulation) => {
        let sum = acc + currentPopulation.population
        return sum
    }
        , 0)
    return sumPopulation;
}

//   console.log(getPopulation(countries));

// Exercise 2


const longestName = (array) => {
    const compareLength = (acc, curr) => acc.name.length > curr.name.length ? acc : curr
    return array.reduce((compareLength))
}
// console.log(longestName(countries));

// Exercise 3

const totalAreaByRegion = (arrayCountries, region = 'Europe') => {
    const filterRegion = arrayCountries.filter((currentObj) => {
        if (currentObj.region === region) {
            return currentObj;
        }
    })
    const sumArea = filterRegion.reduce((acc, curr) => acc + curr.area, 0)
    return sumArea;
    // return filterRegion
}

// console.log(totalAreaByRegion(countries, 'Asia'));

// Exercise 4

const getLargestCountriesByRegion = (array) => {

    const bigCity = array.reduce((acc, curr) => {

        if (acc.region === curr.region) {
            return acc.area > curr.area ? acc : curr
            
        }
        return acc;
    })
    return bigCity;
    // return {
    //    acc[curr.region]: { name: bigCity.name, area: bigCity.area },
    // }
}

console.log(getLargestCountriesByRegion(countries));