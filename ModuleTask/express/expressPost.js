
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlisparsed = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

app.get('./form.html',(req,res) => {
    res.sendFile(__dirname + "/" + "form.html" )
})

app.post('/post_response',urlisparsed,(req,res) => {
    response = {
        first_name:req.body.first_name,  
        last_name:req.body.last_name 
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(3000,function () {
    console.log("Listening on Port 3000");
});