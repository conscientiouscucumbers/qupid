import db from '../db';

export default function logout(req) {
  return new Promise((resolve, reject) => {
    req.session.destroy(() => {
      req.session = null;

      const business = {
        email: req.body.email,
      };

      var queryStr = `select * from business where email = "${business.email}"`;
      db.query(queryStr, (err, business) => {
        if (err) {
          console.log('could not find business in business table');
          reject(err);
        } else {
          console.log('successfully found business to log out = ', business);
          return resolve(business);
        }
      });
    });
  });
}
