var express = require('express');
var userController = require('../controllers/userController');
var app = express();
var userRouter = require('express').Router();

userRouter.get('/user', userController.retrieveUsers);
userRouter.post('/user', userController.createUser);

userRouter.get('/coupon/:coupon_id', userController.retrieveOneCoupon);
userRouter.get('/coupon', userController.retrieveCoupons);
userRouter.post('/coupon', userController.createCoupon);

userRouter.get('/user/coupon', userController.retrieveUserCoupons);
userRouter.post('/user/coupon', userController.sendUserCoupons);

userRouter.get('/user/coupon/:coupon_id', userController.retrieveOneUserCoupon);
userRouter.post('/user/coupon/:coupon_id', userController.createUserCoupon);
userRouter.put('/user/coupon/:coupon_id', userController.useUserCoupon);

userRouter.get('/login', userController.login);
userRouter.post('/signup', userController.signup);
userRouter.post('/logout', userController.logout);

module.exports = userRouter;
