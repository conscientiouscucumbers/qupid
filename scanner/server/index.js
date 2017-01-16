var app = require('./server.js');
var socketio = require('socket.io');
var websocket = socketio(app);

app.listen(process.env.PORT || 4569, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = websocket;
