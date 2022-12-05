var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   console.log("Got a GET request");  
   res.send('Welcome to / get page');  
})  
app.post('/', function (req, res) {  
   console.log("Got a POST request");  
   res.send('Welcome to / post page ');  
})  
app.delete('/del', function (req, res) {  
   console.log("Got a DELETE request for /del");  
   res.send('Welcome to /del delete page');  
})  
app.get('/msg', function (req, res) {  
   console.log("Got a GET request");  
   res.send('Hello');  
})  
// This responds a GET request for abcd, abxcd, ab123cd, and so on  
app.get('/ab*cd', function(req, res) {     
   console.log("Got a GET request for /ab*cd");  
   res.send('Pattern Matched.');  
})  
var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  