const fs = require('fs');
const axios = require('axios');

const fetchJacksonHoleData = async () => {
    const resort = {
        name: 'Jackson Hole',
        latitude: '43.60',
        longitude: '-110.85'
    };

    const apiUrl = `https://ski-resort-forecast.p.rapidapi.com/${encodeURIComponent(resort.name)}/snowConditions?units=i`;

    try {
        const response = await axios.request({
            method: 'GET',
            url: apiUrl,
            headers: {
                'X-RapidAPI-Key': 'c846753c0cmsh011a5ca3fc881f1p1f142fjsn56095a7e72cb', // Replace with your actual API key
                'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
            }
        });

        const snowfall = response.data?.freshSnowfall || '0in'; // Default to 0 inches if no data is available

        const result = {
            name: resort.name,
            latitude: resort.latitude,
            longitude: resort.longitude,
            snowfall: snowfall
        };

        console.log(`Fetched data for ${resort.name}:`, result);

        // Write to JSON file
        try {
            fs.writeFileSync('./heatmap/jackson_hole_test.json', JSON.stringify(result, null, 2));
            console.log('Data successfully saved to jackson_hole_test.json');
        } catch (writeError) {
            console.error('Error saving data to jackson_hole_test.json:', writeError.message);
        }
    } catch (error) {
        console.error(`Error fetching data for ${resort.name}:`, error.message);
    }
};

// Call the function
fetchJacksonHoleData();
