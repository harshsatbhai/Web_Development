const  fs = require('fs');

// Read Exiting File
let data = fs.readFileSync('Data.json', 'utf8');
let obj = JSON.parse(data);

obj.city = "Mumbai";

fs.writeFileSync('Data.json', JSON.stringify(obj, null, 2), 'utf8');
console.log('Data updated successfully!');
