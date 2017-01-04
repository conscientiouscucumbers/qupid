var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ihearth',
  port: '8080'
});

connection.connect();

module.exports = connection;