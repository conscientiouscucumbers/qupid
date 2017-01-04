var userController = require('./userController');
var userRouter = require('express').Router();

userRouter.route('/')
  .get(userController.retrieveUsers)
  .post(userController.createUser)

userRouter.route('/user')
  .get(userController.retrieveUsers)
  .post(userController.createUser)

userRouter.route('/user/:user_id')
  .get(userController.retrieveOneUser)

userRouter.route('/user/coupon')
  .get(userController.retrieveUserCoupons)
  .post(userController.sendUserCoupons)

userRouter.route('/user/coupon/:coupon_id')
  .get(userController.retrieveOneUserCoupon)
  .post(userController.createUserCoupon)
  .put(userController.useUserCoupon)

module.exports = userRouter;
