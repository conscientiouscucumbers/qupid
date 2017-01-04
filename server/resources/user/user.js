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

var retrieveUserCoupons = (params, callback) => {
  var queryStr = 'select b.beacon_id, uc.user_id, c.coupon_id, c.created_at from user_coupon as uc \
                  inner join coupon as c on (uc.coupon_id = c.coupon_id) \
                  inner join coupon_beacon as cb on (c.coupon_id = cb.coupon_id)';
  db.query(queryStr, (err, coupons) => {
    if (err) {
      console.log('could not find any entries in user_coupon table');
      callback(err);
    } else {
      if (coupons.length > 0) {
        coupons.forEach((coupon) => {
          if (coupon.user_id === params.user_id) {
            console.log('successfully found matching coupon for a specific user');
            callback(null, coupon);
          }
        });
        console.log('found 0 coupons matching user_id');
      } else {
        console.log('found 0 entries in user_coupon table');
        callback(err);
      }
    }
  });
};
module.exports.retrieveUserCouponsAsync = Promise.promisify(retrieveUserCoupons);

var sendUserCoupons = (params, callback) => {
  var queryStr = 'select b.beacon_id, uc.user_id, c.coupon_id, c.created_at from user_coupon as uc \
                  inner join coupon as c on (uc.coupon_id = c.coupon_id) \
                  inner join coupon_beacon as cb on (c.coupon_id = cb.coupon_id)';
  db.query(queryStr, (err, coupons) => {
    if (err) {
      console.log('could not find any entries in user_coupon table');
      callback(err);
    } else {
      if (coupons.length > 0) {
        coupons.forEach((coupon) => {
          if (coupon.created_at === params.created_at && coupon.beacon_id === params.beacon_id) {
            var createUserCouponStr = `insert into user_coupon (user_id, coupon_id, used, expired) values \
                                      (${coupon.user_id}, ${coupon.coupon_id}, false, false)`;
            db.query(createUserCouponStr, (err, coupon) => {
              if (err) {
                console.log('could not create new coupon entry in user_coupon table');
                callback(err);
              } else {
                console.log('successfully created new coupon entry in user_coupon table');
                callback(null, coupon);
              }
            });
          }
        });
        console.log('found no matching newly created coupons to be sent to users');
      } else {
        console.log('found 0 entries in user-coupon table');
        callback(err);
      }
    }
  });
};
module.exports.sendUserCouponsAsync = Promise.promisify(sendUserCoupons);

var retrieveOneUserCoupon = (params, callback) => {
  var queryStr = `select * from user_coupon where coupon_id = ${params.coupon_id}`;
  db.query(queryStr, (err, coupon) => {
    if (err) {
      console.log('could not retrieve user coupon with a coupon_id', params.coupon_id);
      callback(err);
    } else {
      console.log('successfully retrieved user coupon with a specific coupon_id', params.coupon_id);
      callback(null, coupon);
    }
  });
};
module.exports.retrieveOneUserCouponAsync = Promise.promisify(retrieveOneUserCoupon);

var createUserCoupon = (params, callback) => {
  var queryStr = `insert into user_coupon (user_id, coupon_id, used, expired) values \
                  (${params.user_id}, ${params.coupon_id}, ${params.used}, ${params.expired})`;
  db.query(queryStr, (err, coupon) => {
    if (err) {
      console.log('could not create a specific user coupon with coupon_id', req.params.coupon_id);
      callback(err);
    } else {
      console.log('successfully created a specific user coupon with coupon_id', req.params.coupon_id);
      callback(null, coupon);
    }
  });
};
module.exports.createUserCouponAsync = Promise.promisify(createUserCoupon);

var useUserCoupon = (params, callback) => {
  var queryStr = `update user_coupon set used = true where coupon_id = ${params.coupon_id}`;
  db.query(queryStr, (err, coupon) => {
    if (err) {
      console.log('could not use specific user coupon with coupon_id', params.coupon_id);
      callback(err);
    } else {
      console.log('successfully used a specific user coupon with coupon_id', params.coupon_id);
      callback(null, coupon);
    }
  });
};
module.exports.useUserCouponAsync = Promise.promisify(useUserCoupon);
