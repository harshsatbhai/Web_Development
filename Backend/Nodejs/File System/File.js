const fs = require('fs');

fs.writeFile('example.txt', 'Hello World!' ,(err) => {
   if (err){
      console.error("Error writing file:", err);
      return;
   }
   console.log("File written successfully!");   
});

fs.readFile('example.txt', 'utf8', (err, data) => {
   if (err) {
      console.error("Error reading file:", err);   
   }
   console.log("File content:", data);
});


