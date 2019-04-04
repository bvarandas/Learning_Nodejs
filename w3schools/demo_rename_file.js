//var http = require('http');
var fs =require('fs');

fs.rename('mynewfile1.txt','myrenamedfile.txt',  function (err){
	if (err) throw err;
	
	console.log('File renamed!!!');
});
/*
http.createServer(function (req, res) {
  
  fs.readFile('demofile1.html', function(err, data) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
  });
  
}).listen(8080);
*/