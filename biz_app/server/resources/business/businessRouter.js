var businessController = require('./businessController');
var businessRouter = require('express').Router();

businessRouter.route('/:user_qrcode')
  .put(businessController.useCoupon)

module.exports = businessRouter;