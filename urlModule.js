var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
var q = url.parse(req.url, true);
var fileName = "."+q.pathname;
//use url - http://localhost:8080/winter.html for winter
//use url - http://localhost:8080/summer.html for summer

fs.readFile(fileName,function(err,data){
    if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("404 Not Found");
    }
    else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    }
});
}).listen(8080);