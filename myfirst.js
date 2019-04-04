var http = require('http');
var dt =require('./myfirstmodule');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write("The date and time current: " + dt.myDateTime());
  res.end();
  //res.emd('testando novamente a aplicação');
  
}).listen(8080);