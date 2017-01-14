import db from '../db';

export default function logout(req) {
  return new Promise((resolve, reject) => {
    req.session.destroy(() => {
      const business = {
        email: req.body.email,
      };
      req.session = null;

      const queryStr = `select * from business where email = "${business.email}"`;
      db.query(queryStr, (err, biz) => {
        if (err) {
          console.log('could not find business in business table');
          reject(err);
        } else {
          console.log('successfully logged out business', biz);
          return resolve(biz[0]);
        }
      });
    });
  });
}
