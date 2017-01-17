var Promise = require('bluebird');
var db = require('../../db');

var useCoupon = (params, socket, callback) => {
  var queryStr = `update user_coupon set used = true where user_qrcode = "${params.user_qrcode}"`;
  db.query(queryStr, (err, coupon) => {
    if (err) {
      console.log('could not use a coupon with user_qrcode', params.user_qrcode);
      callback(err);
    } else {
      console.log('successfully used a coupon with user_qrcode', params.user_qrcode);
      callback(null, coupon);
      socket.emit(params.user_qrcode, {data: socket.id});
    }
  });
};
module.exports.useCouponAsync = Promise.promisify(useCoupon);
