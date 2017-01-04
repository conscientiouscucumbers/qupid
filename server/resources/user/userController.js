let db = require('../../db');
let uuid = require('uuid');

////////////////////////////////////////////////////////////
// FAKE DATA
////////////////////////////////////////////////////////////
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
  var queryStr = 'select * from users';
  db.query(queryStr).then((users) => {
    console.log('successfully retrieved all users');
    res.status(200).json(users);
  }).catch((err) => {
    console.log('could not retrieve any users');
    res.status(404).send('could not find any users in user table');
  });
};

// POST request for /user
// isnert a new user into user table
exports.createUser = (req, res) => {
  var params = [req.body.email, req.body.password, req.body.first_name, req.body.last_name, req.body.dob, req.body.gender];
  var queryStr = 'insert into user (email, password, first_name, last_name, dob, gender) \
                  values (?, ?, ?, ?, ?, ?)';
  db.query(queryStr, params).then((user) => {
    console.log('successfully created a new user');
    res.status(201).json(user);
  }).catch((err) => {
    console.log('could not create a new user');
    res.status(400).send('could not create a new user in user table');
  });
};

// GET request for /user/:user_id
// retrieve one user with a specific user_id
exports.retrieveOneUser = (req, res) => {
  var queryStr = 'select * from users where user_id = ' + req.params.user_id;
  db.query(queryStr).then((user) => {
    console.log('successfully retrieved a single user');
    res.status(200).json(user);
  }).catch((err) => {
    console.log('could not retrieve user with user_id ' + req.params.user_id);
    res.status(404).send('could not find any users in user table');
  });
};

// GET request for /user/coupon
// retrieve all user coupons that have previously been sent to a specific user
// coupons must have matching user_id
exports.retrieveUserCoupons = (req, res) => {
  var queryStr = 'select b.beacon_id, uc.user_id, c.coupon_id, c.created_at from user_coupon as uc \
                  inner join coupon as c on (uc.coupon_id = c.coupon_id) \
                  inner join coupon_beacon as cb on (c.coupon_id = cb.coupon_id)';
  db.query(queryStr).then((coupons) => {
    if (coupons.length > 0) {
      coupons.forEach((coupon) => {
        if (coupon.user_id === req.body.user_id) {
          console.log('successfully found matching coupon for a specific user');
          res.status(200).json(coupon);
        }
      });
      res.status(404).send('found 0 coupons matching user_id');
    } else {
      res.status(404).send('found 0 entries in user-coupon table');
    }
  }).catch((err) => {
    res.status(404).send('could not find any entries in user-coupon table');
  });
};

// POST request for /user/coupon
// check to see if newly created coupons are ready to be sent out to users
// if there are user coupons available, creates a new entry in user_coupon table
// coupons must have matching beacon_id and created_at
exports.sendUserCoupons = (req, res) => {
  var queryStr = 'select b.beacon_id, uc.user_id, c.coupon_id, c.created_at from user_coupon as uc \
                  inner join coupon as c on (uc.coupon_id = c.coupon_id) \
                  inner join coupon_beacon as cb on (c.coupon_id = cb.coupon_id)';
  db.query(queryStr).then((coupons) => {
    if (coupons.length > 0) {
      coupons.forEach((coupon) => {
        if (coupon.created_at === req.body.created_at && coupon.beacon_id === req.body.beacon_id) {
          db.user_coupon.create({
            user_id: coupon.user_id,
            coupon_id: coupon.coupon_id,
            used: false,
            expired: false
          }).then(() => {
            console.log('successfully created new coupon entry in user_coupon table');
            res.status(201).json(coupon);
          });
        }
      });
      res.status(404).send('found no matching newly created coupons to be sent to users');
    } else {
      res.status(404).send('found 0 entries in user-coupon table');
    }
  }).catch((err) => {
    res.status(404).send('could not find any entries in user-coupon table');
  });
};

// TO DO, turn into query string: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// GET request for /user/coupon/:coupon_id
// retrieve a specific user coupon with coupon_id
exports.retrieveOneUserCoupon = (req, res) => {
  var queryStr = 'select * from user_coupon where coupon_id = ' + req.params.coupon_id;
  db.query(queryStr).then((coupon) => {
    console.log('successfully retrieved user coupon with a specific coupon_id', req.params.coupon_id);
    res.status(200).json(coupon);
  }).catch((err) => {
    console.log('could not find a specific user coupon with a specific coupon_id', req.params.coupon_id);
    res.status(404).send('could not find a specific user coupon with a specific coupon_id', req.params.coupon_id);
  });
};

// POST request for /user/coupon/:coupon_id
// create a user coupon with coupon_id by adding a new entry in
// user_coupon table and coupon table
exports.createUserCoupon = (req, res) => {
  var params = [req.body.user_id, req.params.coupon_id, req.body.used, req.body.expired];
  var queryStr = 'insert into user_coupon (user_id, coupon_id, used, expired) values (?, ?, ?, ?)';
  db.query(queryStr, params).then((coupon) => {
      }).then((coupon) => {
        console.log('successfully created a specific user coupon with coupon_id', req.params.coupon_id);
        res.status(201).json(coupon);
      }).catch((err) => {
        console.log('could not create a specific user coupon with coupon_id', req.params.coupon_id);
        res.status(400).send('could not create a specific user coupon', req.params.coupon_id);
      });
    });
};

// PUT request for /user/coupon/:coupon_id
// update/modify an existing user coupon with coupon_id
exports.useUserCoupon = (req, res) => {
  var queryStr = 'update user_coupon set used = true where coupon_id = ' + req.params.coupon_id;
  db.query(queryStr).then((coupon) => {
      console.log('successfully used a specific user coupon with coupon_id', req.params.coupon_id);
      res.status(200).json(coupon);
    }).catch((err) => {
      console.log('could not use specific user coupon with coupon_id', req.params.coupon_id);
      res.status(400).send('could not use specific user coupon with coupon_id', req.params.coupon_id);
    });
};
