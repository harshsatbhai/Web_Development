const fs = require('fs');

// Read JSON file
const data = fs.readFileSync('Data.json', 'utf8');

// Convert JSON text to JS object
const obj = JSON.parse(data);

console.log(obj.name);
console.log(obj.age);