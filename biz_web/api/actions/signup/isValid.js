import db from '../../db';

export default function signup(req) {
  return new Promise((resolve, reject) => {
    const business = {
      company_name: req.body.company_name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
    };
    req.session.business = business;

    const queryStr = `select * from business where email = "${business.email}" && password = "${business.password}"`;
    db.query(queryStr, (err, biz) => {
      if (err) {
        console.log('could not find business in business table');
        reject(err);
      } else {
        console.log('successfully found business to log in = ', biz);
        return resolve(biz);
      }
    });
  });
}
