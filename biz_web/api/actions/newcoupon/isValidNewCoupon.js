import db from '../../db';

export default function isValidNewCoupon(req) {
  console.log('INSIDE ROUTE.......isValidNewCoupon');
  return new Promise((resolve, reject) => {
    const coupon = {
      business_id: 1,
      qrcode: 'somethingrandom.com',
      title: req.body.title,
      image: req.body.image,
      item_name: req.body.item_name,
      description: req.body.description,
      original_price: req.body.original_price,
      coupon_savings: req.body.coupon_savings,
      coupon_price: req.body.original_price - req.body.coupon_savings,
      start_at: req.body.start_at,
      end_at: req.body.end_at
    };
    // console.log('REQ SESSION....', req.session.business);
    console.log('INFO BEING PUT IN DB', coupon);

    const queryStr = `insert into coupon (business_id, qrcode, title, image, item_name,
                      description, original_price, coupon_price, coupon_savings, start_at, end_at) values (
                      ${coupon.business_id},
                      "${coupon.qrcode}",
                      "${coupon.title}",
                      "${coupon.image}",
                      "${coupon.item_name}",
                      "${coupon.description}",
                      ${coupon.original_price},
                      ${coupon.coupon_price},
                      ${coupon.coupon_savings},
                      "${coupon.start_at}",
                      "${coupon.end_at}")`;

//     const queryStr = `insert into coupon (business_id, qrcode, title, image, item_name,
// description, original_price, coupon_price, coupon_savings, start_at, end_at,
// created_at) values (1, 'somethingrandom.com', 'adas', 'image', 'shoes', 'lorem ipsum',
// 10, 5, 5, '2017-01-05 12:00:00', '2017-01-13 12:00:00', now())`;

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
