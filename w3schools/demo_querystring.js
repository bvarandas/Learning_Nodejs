var http = require('http');
var url =require('url');


http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  var q = url.parse(req.url, true).query;
  
  var txt = q.year + " " + q.month;
  
  //res.write(req.url);
  
  //res.write("The date and time current: " + dt.myDateTime());
  
  res.end(txt);
  //res.emd('testando novamente a aplicação');
  
}).listen(8080);