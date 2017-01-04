let mysql = require('promise-mysql');

mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ihearth',
  port: '8080'
}).then((connection) => {
  module.exports = connection;
});

// connection.connect();

// module.exports = connection;
