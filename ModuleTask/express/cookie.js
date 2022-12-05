var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/cookieset',(req, res) => {  
    res.cookie('cookie_name', 'cookie_value');  
    res.cookie('username', 'kiran');  
      
    res.status(200).send('Cookie is set');  
});  

app.get('/cookieget',(req, res) => {  
    res.status(200).send(req.cookies);  
});  

app.get('/',(req,res) => {
    res.send("welcome");
});

app.listen(3000,() => {
    console.log("listening to port 3000");
})