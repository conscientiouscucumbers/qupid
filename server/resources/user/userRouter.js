var userController = require('./userController');
var userRouter = require('express').Router();

userRouter.route('/')
  .get(userController.retrieveUsers)
  .post(userController.createUser)

userRouter.route('/:user_id')
  .get(userController.retrieveOneUser)

userRouter.route('/forgot/:user_email')
  .get(userController.retrievePasswordFromEmail)

userRouter.route('/:user_id/coupon')
  .get(userController.retrieveUserCoupons)

userRouter.route('/:user_id/coupon/:coupon_id')
  .get(userController.retrieveOneUserCoupon)
  .put(userController.useCoupon)

userRouter.route('/login')
  .post(userController.userLogin)

userRouter.route('/logout')
  .post(userController.userLogout)

userRouter.route('/signup')
  .post(userController.userSignup)

userRouter.route('/:user_id/beacon/:beacon_uuid')
  .get(userController.sendBeaconCoupons)

userRouter.route('/device_id/:device_id')
  .get(userController.fetchUserByDevice)

module.exports = userRouter;
