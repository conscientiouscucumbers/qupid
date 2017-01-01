let db = require('../../db');
let uuid = require('uuid');

// GET request for /user
// retrieve all users (array of user objects)
exports.retrieveUsers = (req, res) => {
  db.user.findAll().then((users) => {
    console.log('successfully retrieved all users');
    res.status(200).json(users);
  }).catch((err) => {
    res.status(404).send('could not find any users');
  });
};

// POST request for /user
// find or create a new user in user model
exports.createUser = (req, res) => {
  db.user.findOrCreate({where: {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    gender: req.body.gender
  }}).spread((user, created) => {
    console.log(user.get({ plain: true }));
  });
};

// GET request for /coupon/:coupon_id
// retrieve all coupons with a specific coupon_id
exports.retrieveOneCoupon = (req, res) => {
  db.coupon.findAll({where: {coupon_id: req.body.coupon_id}})
    .then((coupon) => {
      console.log('successfully retrieved coupon with coupon id:', req.body.coupon_id);
      res.status(200).json(coupon);
    }).catch((err) => {
      res.send(404).send('could not find any coupons with coupon id:', req.body.coupon_id);
    });
};

// GET request for /coupon
// retrieve all coupons in coupon table
exports.retrieveCoupons = (req, res) => {
  db.coupon.findAll()
    .then((coupons) => {
      console.log('successfully retrieved all coupons');
      res.status(200).json(coupons);
    }).catch((err) => {
      res.send(404).send('could not find any coupons');
    });
};

// POST request for /coupon
// create new coupon in coupon table
exports.createCoupon = (req, res) => {
  db.coupon.create({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    original_price: req.body.original_price,
    coupon_price: req.body.coupon_price,
    coupon_savings: req.body.coupon_savings,
    start_at: req.body.start_at,
    end_at: req.body.end_at,
    created_at: req.body.created_at,
    business_id: req.body.business_id
  }).then((coupon) => {
    console.log('successfully created a coupon');
    res.status(201).json(coupon);
  }).catch((err) => {
    res.status(404).send('could not create a coupon');
  });
};


// GET request for /user/coupon
// retrieve all user coupons that have previously been sent to a specific user
// coupons must have matching user_id
exports.retrieveUserCoupons = (req, res) => {
  queryStr = 'select b.beacon_id, uc.user_id, c.coupon_id, c.created_at from user_coupon as uc \
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
  queryStr = 'select b.beacon_id, uc.user_id, c.coupon_id, c.created_at from user_coupon as uc \
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

// GET request for /user/coupon/:coupon_id
// retrieve a specific user coupon with coupon_id
exports.retrieveOneUserCoupon = (req, res) => {
  db.user_coupon.findAll({where: {coupon_id: req.body.coupon_id}})
  .then((coupon) => {
    console.log('successfully retrieved a specific user coupon');
    res.status(201).json(coupon);
  }).catch((err) => {
    res.status(404).send('could not find specific user coupon');
  });
});
};

// POST request for /user/coupon/:coupon_id
// find/create a user coupon with coupon_id by adding a new entry in
// user_coupon table and coupon table
exports.createUserCoupon = (req, res) => {
  db.user_coupon.findOrCreate({where: {coupon_id: req.body.coupon_id}})
    .spread((coupon, created) => {
      db.user_coupon.create({
        user_id: req.body.user_id,
        coupon_id: req.body.coupon_id,
        used: req.body.used,
        expired: req.body.expired
      });
      db.coupon.create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        original_price: req.body.original_price,
        coupon_price: req.body.coupon_price,
        coupon_savings: req.body.coupon_savings,
        start_at: req.body.start_at,
        end_at: req.body.end_at,
        created_at: req.body.created_at,
        business_id: req.body.business_id
      }).then((coupon) => {
        console.log('successfully created a specific user coupon');
        res.status(201).json(coupon);
      }).catch((err) => {
        res.status(404).send('could not create a specific user coupon');
      });
    });
};

// PUT request for /user/coupon/:coupon_id
// update/modify an existing user coupon with coupon_id
exports.useUserCoupon = (req, res) => {
  db.user_coupon.update({used: true}, {where: {coupon_id: req.body.coupon_id}})
    .then((coupon) => {
      console.log('successfully used a specific user coupon');
      res.status(200).json(coupon);
    }).catch((err) => {
      res.status(400).send('could not use specific user coupon');
    });
};
