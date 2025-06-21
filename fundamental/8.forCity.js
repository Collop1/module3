// Using an object to store city data
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australian Eastern Standard Time'
}
const rockhampton = {
    name: 'Rockhampton',
    population: 81_968,
    state: 'QLD',
    founded: '25 October 1858',
    timezone: 'Australian Eastern Standard Time'
}

for (const key in rockhampton) {
    console.log(`${key}: ${rockhampton[key]}`);
}

// Using an array of objects to store city data
const cities = [
    {
        name: 'Sydney',
        population: 5_121_000,
        state: 'NSW',
        founded: '26 January 1788',
        timezone: 'Australian Eastern Standard Time'
    },
    {
        name: 'Rockhampton',
        population: 81_968,
        state: 'QLD',
        founded: '25 October 1858',
        timezone: 'Australian Eastern Standard Time'
    }
];

function getCityInfo(cities) {
    for (const city of cities) {
        console.log('---'); // Separator between cities
        for (const key in city) {
            console.log(`${key}: ${city[key]}`);
        }
    }
}

getCityInfo(cities.filter(city => city.name === 'Sydney'));