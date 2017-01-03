var couponController = require('./couponController.js');
var userController = require('../user/userController.js');
var couponRouter = require('express').Router();

// TODO: NEED TO REFACTOR INTO COUPONCONTROLLER >>>>>>>>>>>>>>>>>>>>>>>
couponRouter.route('/')
  .get(userController.retrieveCoupons)
  .post(userController.createCoupon)

couponRouter.route('/:coupon_id')
  .get(userController.retrieveOneCoupon)

module.exports = couponRouter;
