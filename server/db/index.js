var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ihearth'
});

connection.connect();

module.exports = connection;
