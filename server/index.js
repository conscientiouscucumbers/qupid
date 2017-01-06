var app = require('./server.js');
var port = 3000;

// app.listen(port, function () {
//   console.log('iHearth RESTful API listening on port ' + port);
// });

app.listen(process.env.PORT || 4568, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});