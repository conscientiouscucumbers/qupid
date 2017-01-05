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

var createUser = (params, callback) => {
  var queryStr = `insert into user (email, password, first_name, last_name, dob, gender) \
    values ("${params.email}", "${params.password}", "${params.first_name}",
    "${params.last_name}", "${params.dob}", "${params.gender}")`;
  db.query(queryStr, (err, res) => {
    console.log(queryStr)
    if (err) {
      console.log('could not create a new user');
      callback(err);
    } else {
      var returnUserStr = `select * from user where email = "${params.email}" && "${params.password}"`;
      db.query(returnUserStr, (err, res) => {
        if (err) {
          console.log('could not find specific user with email and password');
          callback(err);
        } else {
          console.log('successfully created a new user');
          callback(null, res);
        }
      });
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

var retrieveUserCoupons = (params, callback) => {
  var queryStr = `select * from coupon as c inner join user_coupon as uc on (c.coupon_id = uc.coupon_id) \
                  where uc.user_id = ${params.user_id}`;
  db.query(queryStr, (err, coupons) => {
    if (err) {
      console.log('could not find any coupons in coupon table for user with user_id', params.user_id);
      callback(err);
    } else {
      console.log('successfully found coupons for user with user_id', params.user_id);
      callback(null, coupon);
    }
  });
};
module.exports.retrieveUserCouponsAsync = Promise.promisify(retrieveUserCoupons);

var retrieveOneUserCoupon = (params, callback) => {
  var queryStr = `select * from coupon as c inner join user_coupon as uc on (c.coupon_id = uc.coupon_id) \
                  where uc.user_id = ${params.user_id} && uc.coupon_id = ${params.coupon_id}`;
  db.query(queryStr, (err, coupon) => {
    if (err) {
      console.log('could not retrieve coupon with coupon_id', params.coupon_id, 'for user with user_id', params.user_id);
      callback(err);
    } else {
      console.log('successfully retrieved coupon with coupon_id', params.coupon_id, 'for user with user_id', params.user_id);
      callback(null, coupon);
    }
  });
};
module.exports.retrieveOneUserCouponAsync = Promise.promisify(retrieveOneUserCoupon);

var useCoupon = (params, callback) => {
  var queryStr = `update user_coupon set used = true where coupon_id = ${params.coupon_id} && user_id = ${params.user_id}`;
  db.query(queryStr, (err, coupon) => {
    if (err) {
      console.log('could not use a coupon with coupon_id', params.coupon_id, 'for user with user_id', params.user_id);
      callback(err);
    } else {
      console.log('successfully used a coupon with coupon_id', params.coupon_id, 'for user with user_id', params.user_id);
      callback(null, coupon);
    }
  });
};
module.exports.useCouponAsync = Promise.promisify(useCoupon);

var userLogin = (params, callback) => {
  var queryStr = `select * from user where email = "${params.email}" && password = "${params.password}"`;
  db.query(queryStr, (err, user) => {
    if (err) {
      console.log('could not find user in user table');
      callback(err);
    } else {
      console.log('successfully logged in user');
      callback(null, user);
    }
  });
};
module.exports.userLoginAsync = Promise.promisify(userLogin);

var userSignup = (params, callback) => {
  var queryStr = `select * from user where email = "${params.email}" && password = "${params.password}"`;
  db.query(queryStr, (err, user) => {
    if (err) {
      console.log('invalid email and/or password');
      callback(err);
    } else {
      var createUserStr = `insert into user (email, password, first_name, last_name, dob, gender) \
        values ("${params.email}", "${params.password}", "${params.first_name}",
        "${params.last_name}", "${params.dob}", "${params.gender}")`;
      db.query(createUserStr, (err, res) => {
        if (err) {
          console.log('could not sign up/create a new user');
          callback(err);
        } else {
          var returnUserStr = `select * from user where email = "${params.email}" && "${params.password}"`;
          db.query(returnUserStr, (err, res) => {
            if (err) {
              console.log('could not find specific user with email and password');
              callback(err);
            } else {
              console.log('successfully signed up a new user')
              callback(null, res);
            }
          });
        }
      });
    }
  });
};
module.exports.userSignupAsync = Promise.promisify(userSignup);
