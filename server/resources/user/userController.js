let db = require('../../db');

// GET request for /user/coupon
exports.retrieveCoupons = (req, res) => {
  db.coupons.findAll({include: [db.coupons]})
    .then((coupons) => {
      console.log('successfully retrieved all coupons')
      res.status(200).json(coupons);
    }).catch((err) => {
      res.status(404),send('could not find any coupons');
    });
};

// GET request for /user/coupon/:coupon_id
exports.retrieveOneCoupon = (req, res) => {
  db.user_coupon.findAll({where: {coupon_id: req.body.coupon_id}})
    .then((coupon) => {
        console.log('successfully retrieved a specific coupon')
        res.status(201).json(coupon);
      }).catch((err) => {
        res.status(404).send('could not find specific coupon');
      });
    });
};

// POST request for /user/coupon/:coupon_id
exports.sendCouponToUser = (req, res) => {
  db.user_coupon.findOrCreate({where: {beacon_id: req.body.beacon_id}})
    .spread((coupon, created) => {
      db.coupons.create({
        id: req.body.id,
        user_id: req.body.user_id,
        coupon_id: req.body.coupon_id,
        used: req.body.used,
        expired: req.body.expired
      }).then((coupon) => {
        console.log('successfully retrieved a specific coupon')
        res.status(201).json(coupon)
      }).catch((err) => {
        res.status(404).send('could not find specific coupon');
      });
    });
};

// PUT request for /user/coupon/:coupon_id
exports.useCoupon = (req, res) => {
  db.user_coupon.update({used: true}, {where: {coupon_id: req.body.coupon_id}})
    .then((coupon) => {
      console.log('successfully used a specific coupon');
      res.status(200).json(coupon);
    }).catch((err) => {
      res.status(400).send('could not use specific coupon');
    });
};

exports.
