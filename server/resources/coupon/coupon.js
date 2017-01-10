var Promise = require('bluebird');
var db = require('../../db');

var retrieveCoupons = callback => {
  var queryStr = 'select c.coupon_id, c.business_id, c.qrcode, c.title, c.image, c.item_name, \
  c.description, c.original_price, c.coupon_price, c.coupon_savings, CAST(c.start_at as time) as start_at, \
  CAST(c.end_at as time) as end_at, CAST(c.created_at as time) as created_at, b.company_name from coupon as c left join business as b on \
  c.business_id = b.business_id';
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      console.log('RESULT', res);
      callback(null, res);
    }
  });
};
module.exports.retrieveCouponsAsync = Promise.promisify(retrieveCoupons);

var createCoupon = (params, callback) => {
  var queryStr = `insert into coupon (qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at) \
    values ("${params.qrcode}", "${params.title}", "${params.image}", "${params.item_name}", "${params.description}", "${params.original_price}", "${params.coupon_price}", "${params.coupon_savings}", "${params.start_at}", "${params.end_at}")`;
  db.query(queryStr, function(err, res) {

    if (err) {
      console.log('error');
      callback(err);
    } else {
      callback(null, res);
    }
  })
}
module.exports.createCouponAsync = Promise.promisify(createCoupon);

var retrieveOneCoupon = (params, callback) => {
  var queryStr = `select C.coupon_id, C.business_id, C.qrcode, C.title, C.image, C.item_name, C.description, C.original_price, C.coupon_price, C.coupon_savings, C.start_at, C.end_at, C.created_at, B.company_name
    from coupon as C
    left join business as B
    on C.business_id = B.business_id
    where coupon_id="${params.coupon_id}"`;
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};
module.exports.retrieveOneCouponAsync = Promise.promisify(retrieveOneCoupon);
