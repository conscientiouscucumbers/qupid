import mysql from 'mysql';

let connection = mysql.createConnection({
  // host: '104.198.215.160',
  user: 'root',
  password: '',
  database: 'ihearth'
});

connection.connect();

module.exports = connection;
