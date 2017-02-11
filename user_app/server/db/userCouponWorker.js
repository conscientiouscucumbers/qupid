var Promise = require('bluebird');
var db = require('../db');

let checkExpired = (callback) => {
  var queryStr = `update user_coupon as uc
                  left join coupon as c on
                  uc.coupon_id=c.coupon_id
                  set uc.expired=1
                  where now() > c.end_at`;
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      console.log('success at checkExpired');
      callback(null, res);
    }
  });  
}

module.exports.checkExpiredAsync = Promise.promisify(checkExpired);

let checkUnexpired = (callback) => {
  var queryStr = `update user_coupon as uc
                  left join coupon as c on
                  uc.coupon_id=c.coupon_id
                  set uc.expired=0
                  where now() < c.end_at`;
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      console.log('success at checkUnexpired');
      callback(null, res);
    }
  });  
}

module.exports.checkUnexpiredAsync = Promise.promisify(checkUnexpired);

let checkActive = (callback) => {
  var queryStr = `update user_coupon as uc
                  left join coupon as c on
                  uc.coupon_id=c.coupon_id
                  set uc.activated=1
                  where now() > c.start_at
                  or now() < c.end_at`;
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      console.log('success at checkActive');
      callback(null, res);
    }
  });  
}

module.exports.checkActiveAsync = Promise.promisify(checkActive);

let checkInactive = (callback) => {
  var queryStr = `update user_coupon as uc
                  left join coupon as c on
                  uc.coupon_id=c.coupon_id
                  set uc.activated=0
                  where now() < c.start_at
                  or now() > c.end_at`;
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      console.log('success at checkInactive');
      callback(null, res);
    }
  });  
}

module.exports.checkInactiveAsync = Promise.promisify(checkInactive);