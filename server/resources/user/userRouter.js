var userController = require('./userController');
var userRouter = require('express').Router();

userRouter.route('/')
  .get(userController.retrieveUsers)
  .post(userController.createUser)

userRouter.route('/coupon')
  .get(userController.retrieveUserCoupons)
  .post(userController.sendUserCoupons)

userRouter.route('/coupon/:coupon_id')
  .get(userController.retrieveOneUserCoupon)
  .post(userController.createUserCoupon)
  .put(userController.useUserCoupon)

// userRouter.get('/user', userController.retrieveUsers);
// userRouter.post('/user', userController.createUser);

// TO DO
// userRouter.get('/coupon/:coupon_id', userController.retrieveOneCoupon);
// userRouter.get('/coupon', userController.retrieveCoupons);
// userRouter.post('/coupon', userController.createCoupon);

// userRouter.get('/user/coupon', userController.retrieveUserCoupons);
// userRouter.post('/user/coupon', userController.sendUserCoupons);

// userRouter.get('/user/coupon/:coupon_id', userController.retrieveOneUserCoupon);
// userRouter.post('/user/coupon/:coupon_id', userController.createUserCoupon);
// userRouter.put('/user/coupon/:coupon_id', userController.useUserCoupon);

// TO DO
// userRouter.get('/login', userController.login);
// userRouter.post('/signup', userController.signup);
// userRouter.post('/logout', userController.logout);

module.exports = userRouter;
