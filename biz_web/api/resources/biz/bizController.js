import db from '../../db';
import bizModel from './biz.js';

export default retrieveCoupons = (req, res) => {
  bizModel.retrieveCouponsAsync()
  .then(coupons => {
    res.status(200).json(coupons);
  })
  .catch(err => {
    res.status(404).send('could not find any coupons in coupon table');
  });
};

export default createCoupon = (req, res) => {
  bizModel.createCouponAsync()
  .then(coupon => {
    res.status(200).json(coupon);
  })
  .catch(err => {
    res.status(404).send('could not create a coupon within the coupon table');
  });
};

export default bizSignup = (req, res) => {
  let params = {
    company_name: req.body.company_name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode
  };
  bizModel.createUserAsync(params)
  .then(biz => {
    res.status(201).json(biz);
  })
  .catch((err) => {
    res.status(400).send('could not create a new business in business table');
  });
};

export default bizLogin = (req, res) => {
  let params = { email: req.body.email, password: req.body.password };
  bizModel.bizLoginAsync(params)
  .then(biz => {
    res.status(200).json(coupon);
  })
  .catch(err => {
    res.status(404).send('business could not log in');
  });
};

exports.bizLogout = (req, res) => {
  console.log('request body for logout here.....', req.body);
  var params = { email: req.body.email };
  bizModel.bizLogoutAsync(params)
  .then((biz) => {
    if (biz.length === 0) {
      throw new Error('Not a match');
    }
    res.status(200).json(biz);
  }).catch((err) => {
    res.status(400).json({ error: 'business failed to log out, business not found in business table'});
  });
};
