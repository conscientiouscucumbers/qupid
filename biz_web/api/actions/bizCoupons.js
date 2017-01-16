import db from '../db';

var retrieveBizCoupons = (req) => {
  return new Promise((resolve, reject) => {
    const business = {
      email: req.body.email,
    };
    req.session.business = business;
  var queryStr = `select * from business where email="${business.email}"`;

  db.query(queryStr, (err, biz) => {
    if(err) {
      console.log('could not find business from login');
      reject(err);
    }else{
      loggedInBiz = biz[0].business_id;
      console.log('found logged in biz', loggedinBiz);
      var queryCouponStr = `select * from coupons where business_id=${loggedInBiz}`;
      db.query(queryCouponStr, (err, bizCoupons){
        if(err) {
          console.log('could not find coupons with biz id');
        }else{
          return resolve(bizCoupons);
        }
      })
    }
  })
  })
};