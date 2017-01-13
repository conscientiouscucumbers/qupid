import db from '../db';

export default function logout(req) {
  return new Promise((resolve, reject) => {
    req.session.destroy(() => {
      req.session = null;

      var queryStr = `select * from business where email = "${params.email}"`;
      db.query(queryStr, (err, business) => {
        if (err) {
          console.log('could not find user in user table');
          reject(err);
        } else {
          console.log('successfully found user to log out = ', user[0]);
          return resolve(business);
        }
      });
    });
  });
}
