var userController = require('./userController');
var userRouter = require('express').Router();

userRouter.route('/')
  .get(userController.retrieveUsers)
  .post(userController.createUser)

userRouter.get('/user', userController.retrieveUsers);
userRouter.post('/user', userController.createUser);


userRouter.route('/coupon')
  .get(userController.retrieveUserCoupons)
  .post(userController.sendUserCoupons)

userRouter.route('/coupon/:coupon_id')
  .get(userController.retrieveOneUserCoupon)
  .post(userController.createUserCoupon)
  .put(userController.useUserCoupon)

module.exports = userRouter;
