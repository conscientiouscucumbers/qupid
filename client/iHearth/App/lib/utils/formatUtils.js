// Function to return into dollar format
export function formatDollars(num) {
  return '$' + parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

export function formatTime(time) {
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
