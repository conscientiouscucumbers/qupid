var Promise = require('bluebird');
var db = require('../../db');

var retrieveUsers = callback => {
  var queryStr = 'select * from user';
  db.query(queryStr, function(err, res) {
    if(err) {
      console.log('err');
      callback(err);
    } else {
      callback(null, res);
    }
  });
};
module.exports.retrieveUsersAsync = Promise.promisify(retrieveUsers);

//TODO: POST /user not working yet
var createUser = (params, callback) => {
  console.log(params);
  var queryStr = 'insert into user (email, password, first_name, last_name, dob, gender) \
                  values (?, ?, ?, ?, ?, ?)';
  db.query(queryStr, params, function(err, res) {
    if(err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};
module.exports.createUserAsync = Promise.promisify(createUser);

var retrieveOneUser = (params, callback) => {
  var queryStr = 'select * from user where user_id = ?';
  db.query(queryStr, params, function(err, res) {
    console.log(params);
    if(err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};
module.exports.retrieveOneUserAsync = Promise.promisify(retrieveOneUser);