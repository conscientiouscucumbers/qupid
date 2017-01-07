var couponModel = require('./coupon.js');

// GET request for /coupon
// retrieve all coupons in coupon table
exports.retrieveCoupons = (req, res) => {
  couponModel.retrieveCouponsAsync()
  .then(coupons => {
    res.status(200).json({ coupons: coupons });
  })
  .catch((err) => {
    res.status(400).send({ coupons: [ { item_name: 'Server-side error' } ] });
  })
};

// POST request for /coupon
// create new coupon in coupon table
exports.createCoupon = (req, res) => {
  // var params = [req.body.title, req.body.image, req.body.item_name, req.body.description, req.body.original_price, req.body.coupon_price, req.body.coupon_savings, req.body.start_at, req.body.end_at];
  var params = {
    title: req.body.title,
    image: req.body.image,
    item_name: req.body.item_name,
    description: req.body.description,
    original_price: req.body.original_price,
    coupon_price: req.body.coupon_price,
    coupon_savings: req.body.coupon_savings,
    start_at: req.body.start_at,
    end_at: req.body.end_at
  };
  couponModel.createCouponAsync(params)
  .then(coupon => {
    res.status(201).json(coupon);
  })
  .catch((err) => {
    res.status(400).send('create post error from server');
  })
};

// GET request for /coupon/:coupon_id
// retrieve all coupons with a specific coupon_id
exports.retrieveOneCoupon = (req, res) => {
  var params = { coupon_id: req.params.coupon_id };
  couponModel.retrieveOneCouponAsync(params)
  .then(couponInfo => {
    res.status(200).json({ couponInfo: couponInfo });
  })
  .catch((err) => {
    res.status(400).send({ couponInfo: { title: 'Server-side error'} });
  });
};