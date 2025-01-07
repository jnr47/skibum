const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('./resorts_heatmap_data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Save results to resorts_heatmap_data.json
    fs.writeFileSync('./resorts_heatmap_data.json', JSON.stringify(results, null, 2));
    console.log('CSV file converted to JSON: resorts_heatmap_data.json');
  });
