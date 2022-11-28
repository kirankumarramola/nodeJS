var url = require('url');
var adr = "http://localhost:8080/default.htm?year=2022&month=NOV&date=21";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);

var d = q.query;
console.log("Date : "+d.date+"-"+d.month+"-"+d.year);