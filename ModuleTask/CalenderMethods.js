var calendar = require('node-calendar');

var cal = new calendar.Calendar(6);
var yearCalendar = cal.yeardayscalendar(2004);
cal.setfirstweekday(6);
var result = cal.getfirstweekday();
var result = calendar.isleap(2024);
var result = calendar.leapdays(1947,2022);
var result = calendar.monthrange(1999,2);
calendar.setlocale();
var result = calendar.day_abbr;
var result = calendar.timegm([2022, 11, 28, 3, 2, 50]);
var result = calendar.weekday(2022,11,27);
var result = cal.itermonthdates(2022,11);
var result = cal.itermonthdays(2022,11);
var result = cal.itermonthdays2(2022,11);
var result = cal.monthdatescalendar(2022,11);
var result = cal.monthdays2calendar(2022,11);

console.log(result);

