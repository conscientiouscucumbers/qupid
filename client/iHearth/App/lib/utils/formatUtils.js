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

export function sqlToJsDate(sqlDate){
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
