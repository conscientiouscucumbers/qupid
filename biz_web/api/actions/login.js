import db from '../db';

export default function login(req) {
  const business = {
    email: req.body.email,
    password: req.body.password
  };
  req.session.business = business;

  let queryStr = `select * from business where email = "${params.email}" && password = "${params.password}"`;
  db.query(queryStr, (err, business) => {
    if (err) {
      console.log('could not find business in business table');
      Promise.reject(err);
    } else {
      console.log('successfully found business to log in = ', business);
      return Promise.resolve(business);
    }
  });
}
