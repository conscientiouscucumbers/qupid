var Promise = require('bluebird');
var db = require('../../db');

// var retrieveCoupons = callback => {
//   console.log('calling retrieveCoupons');
//   var queryStr = 'select * from coupon;'
//   db.query(queryStr, function(err, res) {
//     console.log('in callback');
//     if (err) {
//       console.log('error', err);
//       callback(err);
//     } else {
//       console.log('RES', res);
//       callback(null, res);
//     }
//   });
// };

// retrieveCoupons((err, res) => { console.log('RES TEST'res) });

// module.exports.retrieveCouponsAsync = Promise.promisify(retrieveCoupons);

module.exports.retrieveCoupons = function(callback) {
  var queryStr = 'select * from coupon';
  console.log('GETS HERE IN RETRIVECOUPONS')
  db.query(queryStr, function(err, coupons) {
    // console.log('DO CALLBACK', coupons);
    callback(coupons);
  });
}

