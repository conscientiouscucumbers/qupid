var db = require('../../db');
var userModel = require('./user.js');

// GET request for /user
// retrieve all users (array of user objects)
exports.retrieveUsers = (req, res) => {
  userModel.retrieveUsersAsync()
  .then(users => {
    res.status(200).json(users);
  })
  .catch((err) => {
    res.status(404).send('could not find any users in user table');
  })};

// POST request for /user
// find or create a new user in user model
exports.createUser = (req, res) => {
  var params = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    gender: req.body.gender
  };
  userModel.createUserAsync(params)
  .then(user => {
    res.status(201).json(user);
  })
  .catch((err) => {
    res.status(400).send('could not create a new user');
  });
};

// GET request for /user/:user_id
// retrieve one user with a specific user_id
exports.retrieveOneUser = (req, res) => {
  var params = [req.params.user_id];
  userModel.retrieveOneUserAsync(params)
  .then(user => {
    res.status(200).json(user);
  })
  .catch((err) => {
    res.status(404).send('could not find user with user_id', req.params.user_id, 'in user table');
  })
}

// GET request for /user/:user_id/coupon
// retrieve all user coupons that have previously been sent to a specific user
// coupons must have matching user_id
exports.retrieveUserCoupons = (req, res) => {
  var params = { user_id: req.params.user_id };
  userModel.retrieveUserCouponsAsync(params)
  .then((coupons) => {
    console.log('successfully retrieved all coupons for user with user_id', req.params.user_id);
    res.status(200).json(coupons);
  }).catch((err) => {
    console.log('could not find coupons for user with user_id', req.params.user_id);
    res.status(404).send('could not find coupons for user with user_id', req.params.user_id);
  });
};

// GET request for /user/:user_id/coupon/:coupon_id
// retrieve a specific coupon with coupon_id for user with user_id
exports.retrieveOneUserCoupon = (req, res) => {
  var params = { user_id: req.params.user_id, coupon_id: req.params.coupon_id };
  userModel.retrieveOneUserCouponAsync(params)
  .then((coupon) => {
    console.log('successfully retrieved a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
    res.status(200).json(coupon);
  }).catch((err) => {
    console.log('could not retrieve a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
    res.status(404).send('could not retrieve a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
  });
};

// GET request for /user/:user_id/beacon/:beacon_uuid
// check to see if newly created coupons are ready to be sent out to users
// TODO: When session implementd, change route to /user/beacon/:beacon_uuid
exports.sendBeaconCoupons = (req, res) => {
  var params = { user_id: req.params.user_id, beacon_uuid: req.params.beacon_uuid };
  console.log(params);
  userModel.sendBeaconCouponsAsync(params)
  .then(coupons => {
    console.log('successfully found entries in user_coupon table')
    res.status(200).json(coupons);
    console.log('this');
  }).catch((err) => {
    console.log('could not find a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
    res.status(404).send('could not find a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
  });
};

// PUT request for /user/:user_id/coupon/:coupon_id
// set use = true for an existing coupon with coupon_id for user with user_id
exports.useCoupon = (req, res) => {
  var params = { user_id: req.params.user_id, coupon_id: req.params.coupon_id };
  userModel.useCouponAsync(params)
  .then((coupon) => {
    console.log('successfully used a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
    res.status(200).json(coupon);
  }).catch((err) => {
    console.log('could not use a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
    res.status(400).send('could not use a coupon with coupon_id', req.params.coupon_id, 'for user with user_id', req.params.user_id);
  });
};

// POST request for /user/login
// log in an existing user
exports.userLogin = (req, res) => {
  console.log('request body here.....', req.body);
  var params = { email: req.body.email, password: req.body.password };
  userModel.userLoginAsync(params)
  .then((user) => {
    if (user.length === 0) {
      throw new Error('Not a match');
    }
    res.status(200).json(user);
  }).catch((err) => {
    console.log('user failed to log in, user not found in user table');
    res.status(400).send('user failed to log in, user not found in user table');
  });
};

// POST request for /user/signup
// sign up a new user
exports.userSignup = (req, res) => {
  var params = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    gender: req.body.gender
  };
  userModel.userSignupAsync(params)
  .then(user => {
    res.status(201).json(user);
  })
  .catch((err) => {
    res.status(400).send('could not sign up/create a new user');
  });
};
