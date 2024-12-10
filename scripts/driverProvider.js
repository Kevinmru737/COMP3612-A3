const path = require('path');
const fs = require('fs');

const jsonPath = path.join(__dirname, '../data', 'drivers.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonData);

const jsonPath2 = path.join(__dirname, '../data', 'results.json');
const jsonData2 = fs.readFileSync(jsonPath2, 'utf8');
const results = JSON.parse(jsonData2);

module.exports = {data, results};

