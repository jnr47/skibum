const fs = require('fs');
const axios = require('axios');

console.log('Current directory:', __dirname);

const fetchSnowData = async () => {
    let resorts;
    try {
        resorts = JSON.parse(fs.readFileSync('./resorts_heatmap_data.json', 'utf-8'));
        console.log(`Loaded ${resorts.length} resorts from resorts_heatmap_data.json`);
    } catch (readError) {
        console.error('Error reading resorts_heatmap_data.json:', readError.message);
        return;
    }

    const results = [];

    for (const resort of resorts) {
        const resortName = encodeURIComponent(resort.resortName); // Encode resort name for API URL

        // Correctly reference Latitude and Longitude keys
        const latitude = resort.Latitude;
        const longitude = resort.Longitude;

        if (!resortName || !latitude || !longitude) {
            console.error('Incomplete data for resort:', resort);
            continue; // Skip resorts with missing data
        }

        const apiUrl = `https://ski-resort-forecast.p.rapidapi.com/${resortName}/snowConditions?units=i`;
        console.log(`Calling API for resort: ${resort.resortName} - URL: ${apiUrl}`);

        try {
            const response = await axios.request({
                method: 'GET',
                url: apiUrl,
                headers: {
                    'X-RapidAPI-Key': 'c846753c0cmsh011a5ca3fc881f1p1f142fjsn56095a7e72cb',
                    'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
                }
            });

            console.log('API Response:', response.data);

            const snowfall = response.data?.freshSnowfall || '0in'; // Default to 0 inches if no data

            results.push({
                resortName: resort.resortName,
                latitude: latitude,
                longitude: longitude,
                snowfall: snowfall
            });

            console.log(`Fetched data for ${resort.resortName}: ${snowfall}`);
        } catch (error) {
            console.error(`Error fetching data for ${resort.resortName}:`, error.response?.status, error.message);
            results.push({
                resortName: resort.resortName,
                latitude: latitude,
                longitude: longitude,
                snowfall: '0in' // Default to 0in if request fails
            });
        }
    }

    // Write the results to resorts_with_snowfall.json
    try {
        fs.writeFileSync('./resorts_with_snowfall.json', JSON.stringify(results, null, 2));
        console.log('Data successfully saved to resorts_with_snowfall.json');
    } catch (writeError) {
        console.error('Error saving data to resorts_with_snowfall.json:', writeError.message);
    }
};

fetchSnowData();
