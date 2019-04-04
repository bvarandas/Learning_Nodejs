var uc = require('upper-case');
var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'content-Type': 'text/html'});
    res.write(uc("Hello world"));
    res.end();
}).listen(8080);
