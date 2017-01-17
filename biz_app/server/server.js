var express = require('express');
var bodyParser = require('body-parser');
var businessRouter = require('./resources/business/businessRouter.js');
var { useCouponAsync } = require('./resources/business/business.js');

// Create express app
var app = express();
const port = process.env.PORT || 4569;

var http = require('http');
var socketio = require('socket.io');
var server = http.createServer(app);
var websocket = socketio.listen(server);
// server.listen(process.env.PORT || 4569, function() {
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

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

websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
  // socket.removeAllListeners();
  // Attach business routes
  // app.use('/business', businessRouter);
  // create useCoupon with reference to socket
  app.put('/business/:user_qrcode', (req, res) => {
    var params = { user_qrcode: req.params.user_qrcode };
    useCouponAsync(params, socket)
    .then((coupon) => {
      res.status(200).json(coupon);
    })
    .catch((err) => {
      res.status(400).send('could not use a coupon with coupon_id', req.params.user_qrcode);
    })
  });

});

server.listen(port);
