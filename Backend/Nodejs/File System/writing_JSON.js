const fs = require('fs');

const data = {
   name: "Harsh",
   age: 22   
};

const jsonString = JSON.stringify(data, null, 2);

fs.writeFileSync('Data.json', jsonString, 'utf8');

console.log("File created and data written!");