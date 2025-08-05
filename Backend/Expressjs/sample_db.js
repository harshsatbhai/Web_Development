const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create MySQL Connection
const db = mysql.createConnection({
   host: "localhost",
   user: "User1",
   password: "1234",
   database: "myDatabase"
});

//Connect to MySQL
db.connect((err) => {
   if (err) throw err;
   console.log('Connected to MySQL Database');   
});

app.get('/users', (req, res) => {
   db.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      res.json(results);   
   });   
});

app.listen(3000, () => {
   console.log("Server running on port 3000!");      
});


