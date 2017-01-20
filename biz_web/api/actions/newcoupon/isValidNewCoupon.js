import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';
import db from '../../db';

export default function isValidNewCoupon(req) {
  return new Promise((resolve, reject) => {

    // Ensure we're only processing request when image url is resolved
    if(!req.body.image)  { return resolve({data: 'Need to supply a resolved image url'}); }

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

    // Checker query to prevent simultaneous entries of the same exact data
    const queryCheckerStr = `select * from coupon where
                               (business_id=${coupon.business_id}) and
                               (qrcode="${coupon.qrcode}") and
                               (title="${coupon.title}") and
                               (image="${coupon.image}") and
                               (item_name="${coupon.item_name}") and
                               (description="${coupon.description}") and
                               (original_price=${coupon.original_price}) and
                               (coupon_price=${coupon.coupon_price}) and
                               (coupon_savings=${coupon.coupon_savings}) and
                               (start_at="${coupon.start_at}") and
                               (end_at="${coupon.end_at}")`;

    // Insertion query string
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

    const UUID = 'UUID4';
    const coupon_beaconQueryStr = `insert into coupon_beacon (coupon_id, beacon_uuid) values (${coupon.business_id}, "${UUID}")`;

    db.query(queryCheckerStr, (err, coupon) => {
      if (err) {
        console.error('Error in connecting to db in check query in isValidNewCoupon.js');
        reject(err);
      } else {
        
        // If exists, resolve without inserting into db
        if (coupon.length > 0) {
          return resolve({data: 'Entry already exists in database'});  
        }

        // Insert entry into db if is new, valid entry
        db.query(queryStr, (err, coupon) => {
          if (err) {
            console.error('Error in connecting to db in insert query in isValidNewCoupon.js');
            reject(err);
          } else {

            // Also insert new entry into coupon_beacon table
            db.query(coupon_beaconQueryStr, (err, coupon) => {
              if (err) {
                console.error('Error in connecting to db in coupon_beacon insert query in isValidNewCoupon.js');
                reject(err);
              } else {
                console.log('Success! Inserting new coupon into database');
                return resolve(coupon);
              }
            })
          }
        });
      }
    });
  });
}