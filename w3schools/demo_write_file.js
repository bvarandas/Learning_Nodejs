//var http = require('http');
var fs =require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!!!', function (err){
	if (err) throw err;
	
	console.log('Saved!!!');
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