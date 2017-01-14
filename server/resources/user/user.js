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

var retrievePassword = (params, callback) => {
  var queryStr = `select * from user where email = "${params}"`;
  db.query(queryStr, params, function(err, res) {

    if(err){
      callback(err)
    } else {
      callback(null, res);
    }
  })
}
module.exports.retrieveOneUserPasswordAsync = Promise.promisify(retrievePassword);


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

// (0, 0...): return all related coupons of user
// (1, 0...): only return active related coupons of user
// (0, 1...): only return unused related coupons of user
// (1, 1...): only return active and unused related coupons of user
var retrieveUserCoupons = (active, used, params, callback) => {
  var queryStr = `select * from coupon as c
                  inner join user_coupon as uc
                  on (c.coupon_id = uc.coupon_id)
                  left join business as b
                  on (b.business_id=c.business_id)
                  where uc.user_id = ${params.user_id}
                  ${ active ? ' and now() < c.end_at and now() > c.start_at'
                  : ''}
                  ${ used ? ' and uc.used=0'
                  : ''}`;
  db.query(queryStr, (err, coupons) => {
    if (err) {
      console.log('could not find any coupons in coupon table for user with user_id', params.user_id);
      callback(err);
    } else {
      console.log('successfully found coupons for user with user_id', params.user_id);
      callback(null, coupons);
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
  var loggedInUser;
  var queryStr = `select * from user where email = "${params.email}" && password = "${params.password}"`;
  db.query(queryStr, (err, user) => {
    if (err) {
      console.log('could not find user in user table');
      callback(err);
    } else {
      loggedInUser = user[0];
      console.log('successfully found user to log in = ', user[0]);
      var loginStr = `update user set logged_in = true, device_id = "${params.device_id}" where email = "${params.email}" && password = "${params.password}"`;
      db.query(loginStr, (err, loggedIn) => {
        if (err) {
          console.log('could not set user as logged in');
          callback(err);
        } else {
          console.log('successfully updated database so that user is logged in');
          callback(null, loggedInUser);
        }
      });
    }
  });
};
module.exports.userLoginAsync = Promise.promisify(userLogin);

var userLogout = (params, callback) => {
  var loggedOutUser;
  // var queryStr = `select * from user where email = "${params.email}" && password = "${params.password}"`;
  var queryStr = `select * from user where device_id = "${params.device_id}"`;
  db.query(queryStr, (err, user) => {
    if (err) {
      console.log('could not find user in user table');
      callback(err);
    } else {
      loggedOutUser = user[0];
      console.log('successfully found user to log out = ', user[0]);
      // var logoutStr = `update user set logged_in = false device_id = "${params.device_id}" where email = "${params.email}" && password = "${params.password}"`;
      var logoutStr = `update user set logged_in = false where device_id = "${params.device_id}"`;
      db.query(logoutStr, (err, loggedOut) => {
        if (err) {
          console.log('could not set user as logged out');
          callback(err);
        } else {
          console.log('successfully updated database so that user is logged out');
          callback(null, loggedOutUser);
        }
      });
    }
  });
};
module.exports.userLogoutAsync = Promise.promisify(userLogout);

var userSignup = (params, callback) => {

  var queryStr = `select * from user where email = "${params.email}"`;

  // check for user email
  db.query(queryStr, (err, user) => {
    if (err) {
      console.log('invalid email and/or password');
      callback(err);
    } else {

      // if there is a user returned, it is an invalid signup, return
      if (user.length > 0) {
        callback(null, { error: 'user already exists in database' });
      }

      // insert into database
      var createUserStr = `insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender) \
        values ("${params.email}", "${params.password}", true, "${params.device_id}", "${params.first_name}", \
        "${params.last_name}", "${params.dob}", "${params.gender}")`;
        console.log('createUserStr', createUserStr)
      db.query(createUserStr, (err, insertedUser) => {
        if (err) {
          console.log('error in database connection');
          callback(err);
        } else {

          // save reference to signedup user
          var returnUserStr = `select * from user where email = "${params.email}" AND device_id = "${params.device_id}"`;
          db.query(returnUserStr, (err, selectedUser) => {
            if (err) {
              console.log('could not find specific user with email and device_id');
              callback(err);
            } else {

              // set user field to logged in, set device_id to passed in device_id, and return referenced user
              console.log('successfully signed up a new user');
              callback(null, selectedUser);
            }
          });
        }
      });
    }
  });
};
module.exports.userSignupAsync = Promise.promisify(userSignup);

var sendBeaconCoupons = (params, callback) => {
  // 1) select coupon
  // - matching beacon_uuid
  // - currtime < end_at
  // 2) insert into user_coupon
  // 3) select one coupon, send to user
  // (recieve coupon_id, coupon_title)
  var selectUsableCoupon = `select C.qrcode, C.coupon_id
    from coupon as C
    inner join coupon_beacon as CB
    on CB.coupon_id=C.coupon_id
    where CB.beacon_uuid="${params.beacon_uuid}" and now() < C.end_at;`;
  db.query(selectUsableCoupon, (err, usable) => {
    if(err) {
      console.log('Error in selectedUsableCoupon query');
      callback(err);
    }
    if(usable.length === 0){
      console.log('Currently there is no coupon to be sent');
      callback(null, 'noCoupon');
      // callback(err);
    }
    var selectRegistered = `select coupon_id from user_coupon where coupon_id=${usable[0].coupon_id} and user_id=${params.user_id};`;
    db.query(selectRegistered, (err, registered) => {
      if(err) {
        console.log('Error in selectRegistered query');
        callback(err);
      }
      if(registered.length !== 0 ){
        console.log('Same coupon is already registered in user_coupon table');
        callback(null, 'alreadyRegistered');
        // callback(err);
      }
      else {
        var insertQuery = `insert into user_coupon
          (user_id, coupon_id, user_qrcode, used, expired, activated)
          values (${params.user_id}, ${usable[0].coupon_id}, ${usable[0].qrcode + ":" + params.user_id}, false, false, true);`;
        db.query(insertQuery, (err, inserted) => {
          if (err) {
            console.log('Error occured when inserting newly recieved coupon to the user_coupon join table.');
            callback(err);
          } else {
            console.log('inserted');
            console.log(inserted);
            var selectQuery = `select C.coupon_id, C.title, UC.user_qrcode \
              from coupon as C \
              left join user_coupon as UC \
              on C.coupon_id = UC.coupon_id \
              where UC.user_coupon_id=${inserted.insertId};`
            db.query(selectQuery, (err, coupon) => {
              if(err) {
                console.log('Error occured when selecting newly created coupon from coupon/user_coupon table.')
                callback(err);
              }
              console.log('last step');
              console.log(coupon);
              callback(null, coupon);
            });
          }
        });
      }
    });
  });
}
module.exports.sendBeaconCouponsAsync = Promise.promisify(sendBeaconCoupons);

var fetchUserByDevice = (params, callback) => {
  var queryStr = `select * from user where device_id = "${params.device_id}" && logged_in = true`;
  db.query(queryStr, (err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
};
module.exports.fetchUserByDeviceAsync = Promise.promisify(fetchUserByDevice);
