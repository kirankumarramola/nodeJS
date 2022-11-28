var http = require('http');
var url = require('url');

const server =  http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    var d = url.parse(req.url, true).query;
    var text = d.date+" - "+d.month+" - "+d.year;
    res.end("Date from URL : "+text);
});
server.listen(8080);