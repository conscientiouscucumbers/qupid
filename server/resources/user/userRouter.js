var userController = require('./userController');
var userRouter = require('express').Router();

userRouter.route('/')
  .get(userController.retrieveUsers)
  .post(userController.createUser)

userRouter.route('/:user_id')
  .get(userController.retrieveOneUser)

userRouter.route('/:user_id/coupon')
  .get(userController.retrieveUserCoupons)

userRouter.route('/:user_id/coupon/:coupon_id')
  .get(userController.retrieveOneUserCoupon)
  .put(userController.useCoupon)

userRouter.route('/login')
  .post(userController.userLogin)

userRouter.route('/signup')
  .post(userController.userSignup)

module.exports = userRouter;
