var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'ihearth',
  password: 'password',
  database: 'ihearth'
});

connection.connect();

module.exports = connection;
