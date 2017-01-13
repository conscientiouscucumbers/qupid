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

    const queryStr = `select * from business where email = "${business.email}"`;

    // check for biz email
    db.query(queryStr, (err, biz) => {
      if (err) {
        console.log('invalid email and/or password');
        reject(err);
      } else {

        // if there is a biz returned, it is an invalid signup, return
        if (biz.length > 0) {
          console.log('error: business already exists in database');
          reject(null);
        }

        // insert into database
        const createBizStr = `insert into business (company_name, email, password, address, city, state, zipcode) \
          values ("${business.company_name}", "${business.email}", "${business.password}", "${business.address}", "${business.city}", \
          "${business.state}", "${business.zipcode}")`;
        console.log('createBizStr', createBizStr);
        db.query(createBizStr, (err, insertedBiz) => {
          if (err) {
            console.log('error in database connection');
            reject(err);
          } else {

            // save reference to signedup biz
            console.log('insertedBiz', insertedBiz);
            const returnBizStr = `select * from business where email = "${business.email}" AND password = "${business.password}"`;
            db.query(returnBizStr, (err, selectedBiz) => {
              if (err) {
                console.log('could not find specific business with email and password');
                reject(err);
              } else {

                console.log('successfully signed up a new business', selectedBiz);
                return resolve(selectedBiz);
              }
            });
          }
        });
      }
    });
  });
}
