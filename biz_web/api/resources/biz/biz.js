import Promise from 'bluebird';
import db from '../../db';

let bizLogin = (params, callback) => {
  let loggedInBiz;
  let queryStr = `select * from business where email = "${params.email}" && password = "${params.password}"`;
  db.query(queryStr, (err, biz) => {
    if (err) {
      console.log('could not find business in business table');
      callback(err);
    } else {
      loggedInBiz = biz[0];
      console.log('successfully found business to log in = ', biz[0]);
      callback(null, loggedInBiz);
    }
  });
};
let bizLoginAsync = Promise.promisify(bizLogin);
export default bizLoginAsync;

let bizLogout = (params, callback) => {
  let loggedOutBiz;
  let queryStr = `select * from business where email = "${params.email}"`;
  db.query(queryStr, (err, biz) => {
    if (err) {
      console.log('could not find business in business table');
      callback(err);
    } else {
      loggedOutBiz = biz[0];
      console.log('successfully found business to log out = ', biz[0]);
      callback(null, loggedOutBiz);
    }
  });
};
let bizLogoutAsync = Promise.promisify(bizLogout);
export default bizLogoutAsync;

let bizSignup = (params, callback) => {

  let queryStr = `select * from business where email = "${params.email}"`;

  // check for biz email
  db.query(queryStr, (err, biz) => {
    if (err) {
      console.log('invalid email and/or password');
      callback(err);
    } else {

      // if there is a biz returned, it is an invalid signup, return
      if (biz.length > 0) {
        callback(null, { error: 'business already exists in database' });
      }

      // insert into database
      let createBizStr = `insert into business (company_name, email, password, address, city, state, zipcode) \
        values ("${params.company_name}", "${params.email}", "${params.password}", "${params.address}", "${params.city}", \
        "${params.state}", "${params.zipcode}")`;
        console.log('createBizStr', createBizStr)
      db.query(createBizStr, (err, insertedBiz) => {
        if (err) {
          console.log('error in database connection');
          callback(err);
        } else {

          // save reference to signedup biz
          let returnBizStr = `select * from business where email = "${params.email}" AND password = "${params.password}"`;
          db.query(returnBizStr, (err, selectedBiz) => {
            if (err) {
              console.log('could not find specific business with email and password');
              callback(err);
            } else {

              // set biz field to logged in, set device_id to passed in device_id, and return referenced biz
              console.log('successfully signed up a new business');
              callback(null, selectedBiz);
            }
          });
        }
      });
    }
  });
};
let bizSignupAsync = Promise.promisify(bizSignup);
export default bizSignupAsync;
