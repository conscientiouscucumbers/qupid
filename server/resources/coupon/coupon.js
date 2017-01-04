var Promise = require('bluebird');
var db = require('../../db');

var retrieveCoupons = callback => {
  var queryStr = 'select * from coupon';
  db.query(queryStr, function(err, res) {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports.retrieveCouponsAsync = Promise.promisify(retrieveCoupons);