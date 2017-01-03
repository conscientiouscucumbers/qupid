var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./resources/user/userRouter.js')

// Create express app
var app = express();

// Attach middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// Attach user routes
app.use('/user', userRouter);

module.exports = app;