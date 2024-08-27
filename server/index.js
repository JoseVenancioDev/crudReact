const express = require('express');
const mysql = require('mysql');

// Initialize Express app
const app = express();

// Create MySQL connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'bdjmf',
  database: 'crudReact'
});

// Route to test server
app.get('/', (req, res) => {
    let SQL = "INSERT INTO usuarios (name, email, dataNas) VALUES (João, joao@gmail.com, 14-11-2007)"
    res.send('Hello World');
    db.query(SQL, (err, result) => {
        console.log(err)
    })
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
