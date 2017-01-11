// Cron module
var schedule = require('node-schedule');
var worker = require('./db/userCouponWorker.js');

var app = require('./server.js');

app.listen(process.env.PORT || 4568, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  
  // Schedule job every five second
  var j = schedule.scheduleJob({ rule: '*/5 * * * * *' }, function() {
    return worker.checkExpiredAsync()
    .then((res) => { worker.checkUnexpiredAsync() })
    .then((res) => { worker.checkActiveAsync() })
    .then((res) => { worker.checkInactiveAsync() })
    .then((res) => {
      console.log('Updated user_coupon table, time for tea!', res);
    })
    .catch((err) => {
      console.error('Error in updating db with worker', err);
    })
  });
});
