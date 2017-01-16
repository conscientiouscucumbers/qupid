var db = require('../../db');
var businessModel = require('./business.js');

// PUT request for /business/:user_qrcode
// set use = true for an existing coupon with user_qrcode === scan output
exports.useCoupon = (req, res) => {
  var params = { user_qrcode: req.params.user_qrcode };
  businessModel.useCouponAsync(params)
  .then((coupon) => {
    console.log('successfully used a coupon with user_qrcode', req.params.user_qrcode);
    res.status(200).json(coupon);
  }).catch((err) => {
    console.log('could not use a coupon with coupon_id', req.params.user_qrcode);
    res.status(400).send('could not use a coupon with coupon_id', req.params.user_qrcode);
  });
};