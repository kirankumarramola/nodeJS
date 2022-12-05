const date = require('date-and-time');

const present = new Date();

//format
const now = date.format(present, 'YYYY/MM/DD HH:mm:ss');
console.log(now);    
console.log(date.format(present, 'ddd, MMM DD YYYY'));       
console.log(date.format(present, 'hh:mm A [GMT]Z')  +"             "     +
date.format(present, 'hh:mm A [GMT]Z', true)); 
console.log(date.parse('2015/01/02 12:23:44 PM','YYYY/MM/DD hh:mm:ss A'));  

//parse
const pattern = date.compile('MMM D YYYY hh:m:s A');

date.parse('Mar 22 2019 2:54:21 PM', pattern);
date.parse('Jul 27 2019 4:15:24 AM', pattern);
// console.log(date.parse('Dec 25 2019 3:51:11 AM', pattern));
console.log(date.format(new Date(), pattern)); 

//preparse
console.log(date.preparse('Mon Nov 2022 28 16:18:05 GMT-0800', '    MMM YYYY DD HH:mm:ss [GMT]Z'));

//isvalid
console.log(date.isValid('2022/02/28 23:14:05', 'YYYY/MM/DD HH:mm:ss') +"       "+
date.isValid('29-02-2022', 'DD-MM-YYYY'));

//transform
console.log(date.transform('28/11/2022', 'D/M/YYYY', 'YYYY/MM/DD'));
console.log(date.addMinutes(present,1));

//subtract
const today = new Date(2022,11,28);
const yesterday = new Date(2022,11,27);
console.log(date.subtract(today,yesterday).toMinutes());

//isleapyear
console.log(date.isLeapYear('2022'));

//issameday
const date1 = new Date(2017, 0, 2, 0);         
const date2 = new Date(2017, 0, 2, 23, 59);     
const date3 = new Date(2017, 0, 1, 23, 59);  
console.log(date.isSameDay(date1, date2));
console.log(date.isSameDay(date1, date3));

console.log(date.parse('11:14:05 PM', 'hh:mm:ss A')+"   " +   // => Jan 1 1970 23:14:05 GMT-0800
date.parse('11:14:05 PM', 'hh:mm:ss A', true));
