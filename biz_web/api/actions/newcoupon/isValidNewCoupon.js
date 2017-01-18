import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';
import db from '../../db';

export default function isValidNewCoupon(req) {
  return new Promise((resolve, reject) => {

    const coupon = {
      business_id: req.body.business_id,
      qrcode: req.body.title,
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

    console.log('COUPON IMAGE HERE...', coupon.image);

    // const image = {
    //   uri: JSON.parse(coupon.image)[0].preview,
    //   type: 'image/jpeg',
    //   name: 'myImage' + '-' + Date.now() + '.jpg'
    // }

    // placeholder url
    // const url = `https://quiet-beyond-88440.herokuapp.com/coupon`;

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: imgBody
    // })
    // .then((res) => {res.json()})
    // .then((json) => {
    //   console.log('RESPONSE FROM SERVER HERE...', json);
    // })
    // .catch((err) => {
    //   console.error(err);
    // })

    // fetch(url, {
    //   method: 'GET',
    //   // headers: {
    //   //   'Accept': 'application/json',
    //   //   'Content-Type': 'multipart/form-data',
    //   // },
    //   // body: imgBody
    // })
    // .then((res) => {res.json()})
    // .then((json) => {
    //   console.log('RESPONSE FROM SERVER HERE...', json);
    // })
    // .catch((err) => {
    //   console.error(err);
    // })

    console.log('after fetch!!!!!')
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
