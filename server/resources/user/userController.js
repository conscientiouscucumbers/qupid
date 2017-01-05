var db = require('../../db');
var userModel = require('./user.js');

//////// FAKE DATA //////////////////////
var data = [
  {
    coupon_id: 1,
    title: '$20 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  },
  {
    coupon_id: 2,
    title: '$5 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  },
  {
    coupon_id: 3,
    title: '$5 off socks',
    image: '../../assets/img/socks.png',
    item_name: 'Socks',
    original_price: 10,
    coupon_price: 5,
    coupon_savings: 5,
    start_at: 'start_date',
    end_at: 'end_date',
    created_at: 'created_at_date',
  }
];

var userData = [
  {
    email: 'fleckblake@gmail.com',
    password: 'Packer123',
    first_name: 'Blake',
    last_name: 'Fleck',
    dob: '1990-04-24 12:00:00',
    gender: 'm',
    total_savings: 100
},
  {
    email: 'gujames@gmail.com',
    password: 'DTownBoogie',
    first_name: 'James',
    last_name: 'Gu',
    dob: '1993-05-21 12:00:00',
    gender: 'm',
    total_savings: 50
  },
  {
    email: 'pengjosh@gmail.com',
    password: 'Beacon',
    first_name: 'Josh',
    last_name: 'Peng',
    dob: '1985-10-20 12:00:00',
    gender: 'm',
    total_savings: 75
  },
  {
    email: 'HongSusan@gmail.com',
    password: 'Password123',
    first_name: 'Susan',
    last_name: 'Hong',
    dob: '1994-08-19 12:00:00',
    gender: 'f',
    total_savings: 5000
  }
];

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
  var params = { email: req.body.email, password: req.body.password };
  userModel.userLoginAsync(params)
  .then((user) => {
    console.log('user successfully logged in');
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
