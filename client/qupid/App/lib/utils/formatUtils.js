// Composer helpers
let compose = (f, g) => {
  return x => f(g(x));
}

let composeAll = (...funcs) => {
  return funcs.reduce(compose)
}

// Takes in int and outputs in form of '$1.00'
export function formatDollars(num) {
  return '$' + parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

// Takes in sql datetime string and outputs JS date object
let sqlToJsDate = (sqlDate) => {
  var sqlDate = sqlDate.replace(/[a-z]/ig, ' ')

  //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
  var sqlDateArr1 = sqlDate.split("-");
  //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
  var sYear = sqlDateArr1[0];
  var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
  var sqlDateArr2 = sqlDateArr1[2].split(" ");
  //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
  var sDay = sqlDateArr2[0];
  var sqlDateArr3 = sqlDateArr2[1].split(":");
  //format of sqlDateArr3[] = ['hh','mm','ss.ms']
  var sHour = sqlDateArr3[0];
  var sMinute = sqlDateArr3[1];
  var sqlDateArr4 = sqlDateArr3[2].split(".");
  //format of sqlDateArr4[] = ['ss','ms']
  var sSecond = sqlDateArr4[0];
  var sMillisecond = sqlDateArr4[1];

  return new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond,sMillisecond);
}

// takes in JS date object and outputs in form HH:MM:SS
let JSDateObjectToHHMMSS = (js) => {
  return js.toTimeString().split(' ')[0];
}

// Takes in form of '00:00:00' and outputs in form '12:00am'
let addAMPM = (time) => {
  // kill seconds
  var formatted = time.slice(0, -3);

  // replace leading 0's
  formatted = formatted.replace(/^0+/g, '');

  // check if at 0th hour
  if (formatted.length === 3) {
    return '12' + formatted + 'am';
  }

  // format for am/pm
  var hour = parseInt(formatted.split(':')[0],10);
  if (hour > 12) {
    hour -= 12;
    return hour + ':' + formatted.split(':')[1] + 'pm';
  } else if (hour === 12) {
    return formatted + 'pm';
  } else {
    return formatted + 'am';
  }
}

function adjustJSDateObjectForLocal(js) {
  return new Date(js - ((new Date()).getTimezoneOffset() * 60 * 1000));
}

export function formatSQLTime(sql) {
  return composeAll(addAMPM, JSDateObjectToHHMMSS, adjustJSDateObjectForLocal, sqlToJsDate)(sql)
}

export function formatSQLDate(sql) {
  return sql.replace(/^(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1').slice(0, 10);
}

export function sqlToJsDate(sql) {
  return sqlToJsDate(sql);
}

// takes ms and outputs formatted timeleft string
let msToTimeLeft = (ms) => {
  if (ms === 0) {
    return 'Expired';
  }
  let SEC = 1000;
  let MIN = 60 * 1000;
  let HOUR = 60 * MIN;
  let DAY = 24 * HOUR;
  let WEEK = 7 * DAY;

  let weekLeft = Math.floor(ms / WEEK);
  ms -= weekLeft * WEEK;

  let dayLeft = Math.floor(ms / DAY);
  ms -= dayLeft * DAY;

  let hourLeft = Math.floor(ms / HOUR);
  ms -= hourLeft * HOUR;

  let minLeft = Math.floor(ms / MIN);
  ms -= minLeft * MIN;

  let secLeft = Math.floor(ms / SEC);
  ms -= secLeft * SEC;

  // return `${weekLeft ? weekLeft + 'w ' : ''}${dayLeft ? dayLeft + 'd ' : ''}${hourLeft ? hourLeft + 'h ' : ''}${minLeft ? minLeft + 'm ' : ''}left`;
  if (weekLeft >= 1) { return (weekLeft >= 2) ? `${weekLeft} weeks left` : `${weekLeft} week left`; }
  else if (dayLeft >= 1) { return (dayLeft >= 2) ? `${dayLeft} days left` : `${dayLeft} day left`; }
  else if (hourLeft >= 1) { return (hourLeft >= 2) ? `${hourLeft} hours left` : `${hourLeft} hour left`; }
  else if (minLeft >= 1) { return (minLeft >= 2) ? `${minLeft} minutes left` : `${minLeft} minute left`; }
  else if (secLeft >= 1) { return (secLeft >= 2) ? `${secLeft} seconds left` : `${secLeft} second left`; }
  else { return 'Expired'; }

}

// takes ms and outputs formatted timeleft object
let msToTimeLeftInterval = (ms) => {
  if (ms === 0) {
    return 'Expired';
  }
  let SEC = 1000;
  let MIN = 60 * 1000;
  let HOUR = 60 * MIN;
  let DAY = 24 * HOUR;
  let WEEK = 7 * DAY;

  let weekLeft = Math.floor(ms / WEEK);
  ms -= weekLeft * WEEK;

  let dayLeft = Math.floor(ms / DAY);
  ms -= dayLeft * DAY;

  let hourLeft = Math.floor(ms / HOUR);
  ms -= hourLeft * HOUR;

  let minLeft = Math.floor(ms / MIN);
  ms -= minLeft * MIN;

  let secLeft = Math.floor(ms / SEC);
  ms -= secLeft * SEC;

  if (weekLeft >= 1) { return 'week'; }
  else if (dayLeft >= 1) { return 'day'; }
  else if (hourLeft >= 1) { return 'hour'; }
  else if (minLeft >= 1) { return 'min'; }
  else if (secLeft >= 1) { return 'sec'; }
  else { return 'Expired'; }

}

// takes date object and outputs ms vs. now
let msFromNow = (jsdate) => {
  let withOffset = jsdate - ((new Date()).getTimezoneOffset() * 60 * 1000);
  if (withOffset < new Date()) {
    return 0;
  }
  return jsdate - new Date() - ((new Date()).getTimezoneOffset() * 60 * 1000);
}

export function timeLeft(sql) {
  return composeAll(msToTimeLeft, msFromNow, sqlToJsDate)(sql)
}

export function timeLeftInterval(sql) {
  return composeAll(msToTimeLeftInterval, msFromNow, sqlToJsDate)(sql)
}
