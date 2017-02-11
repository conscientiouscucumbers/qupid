var couponController = require('./couponController.js');
var couponRouter = require('express').Router();

// TODO: NEED TO REFACTOR INTO COUPONCONTROLLER >>>>>>>>>>>>>>>>>>>>>>>
couponRouter.route('/')
  .get(couponController.retrieveCoupons)
  .post(couponController.createCoupon)

couponRouter.route('/:coupon_id')
  .get(couponController.retrieveOneCoupon)

module.exports = couponRouter;
