import db from '../../db';

export default function isValidNewCoupon(req) {
  console.log('INSIDE ROUTE.......isValidNewCoupon');
  return new Promise((resolve, reject) => {
    const coupon = {
      title: req.body.title,
      image: req.body.image,
      item_name: req.body.item_name,
      description: req.body.description,
      original_price: req.body.original_price,
      coupon_savings: req.body.coupon_savings,
      start_at: req.body.start_at,
      end_at: req.body.end_at
    };
    // console.log('REQ SESSION....', req.session.business);
    console.log('INFO BEING PUT IN DB', coupon);

    const queryStr = `select * from coupon`;

    db.query(queryStr, (err, coupon) => {
      if (err) {
        reject(err);
      } else {
        // if there is a biz returned, it is an invalid signup, return
        console.log('resolving query');
        return resolve(coupon);
      }
    });
  });
}
