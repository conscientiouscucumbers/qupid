let MIN = 60 * 1000;
let HOUR = 60 * MIN;
let DAY = 24 * HOUR;
let WEEK = 7 * DAY;


let timeLeft = (ms) => {

  let weekLeft = Math.floor(ms / WEEK); 
  ms -= weekLeft * WEEK;

  let dayLeft = Math.floor(ms / DAY); 
  ms -= dayLeft * DAY;

  let hourLeft = Math.floor(ms / HOUR); 
  ms -= hourLeft * HOUR;

  let minLeft = Math.floor(ms / MIN); 
  ms -= minLeft * MIN;

  return `${weekLeft ? weekLeft + ' w ' : ''}${dayLeft ? dayLeft + ' d ' : ''}${hourLeft ? hourLeft + ' h ' : ''}${minLeft ? minLeft + ' m ' : ''}left`; 
}

console.log(timeLeft(86420000130));