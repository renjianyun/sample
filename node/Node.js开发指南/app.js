var http = require("http");

/*http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello world');
}).listen(3000);*/

var server = new http.Server();

server.on('request', function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello world');
});

server.listen(3000);

console.log("HTTP server islistening at port 3000.");