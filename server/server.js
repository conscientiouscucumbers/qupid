var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var userRouter = require('./resources/user/userRouter.js');
var userController = require('./resources/user/userController.js');
var couponRouter = require('./resources/coupon/couponRouter.js');
var couponController = require('./resources/coupon/couponRouter.js');


// Create express app
var app = express();

// Attach middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Access-Control-Allow-Origin", "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

// Allow clientside access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});

// Attach user and coupon routes
app.use('/user', userRouter);
app.use('/coupon', couponRouter);

// app.get('/login', userController.login);
// app.post('/signup', userController.signup);
// app.post('/logout', userController.logout);

module.exports = app;
