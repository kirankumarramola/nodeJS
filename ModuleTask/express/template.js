var express = require('express');
var app = express();

app.engine('pug', require('pug').renderFile);
app.set('view engine', 'pug');
app.set('views', __dirname);


app.get('/',(req,res) => {
    res.render('template',{title : 'Hello'});
});

app.listen(3000,(req,res) => {
    console.log("listening to port 3000");
});

