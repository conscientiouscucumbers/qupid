var express = require('express');
//var userCtrl = require('../controllers/userController');
//var boopHelper = require('../boopData/boopHelper.js');
var app = express();
var userRouter = require('express').Router();

userRouter.get('/login', userController.login);
userRouter.get('/user/coupon', userController.userCoupon);
userRouter.get('/user/coupon/:id', userController.retrieveOneCoupon);
userRouter.post('/user/coupon', userController.sendCouponToUser);

userRouter.post('/signup', userController.signup);
userRouter.post('/userCoupon', userController.retrieveCoupons);
userRouter.post('/logout', userController.logout)

userRouter.put('/user/coupon/:id', userController.useCoupon);

module.exports = userRouter;