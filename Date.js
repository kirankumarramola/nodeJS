var http = require('http');
const dt = require('./DateModule.js'); //using own modules
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Date and Time\n"+dt.getDate());
    res.end();
}).listen(8080);