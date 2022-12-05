var express = require('express');  
var app = express();  
app.use(function(req, res, next) {  
  console.log('%s %s', req.method, req.url);  
  next();  //middleware function calls the next middleware function
});  
app.get('/', function(req, res, next) {  
  res.send('Hello!');  
});  
app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  
var server = app.listen(3000, function () {  
})  