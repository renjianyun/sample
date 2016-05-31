//httpserverrequestget.js

var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(req.url);
	//res.end(util.inspect(url.parse(req.url,true)));

	var post = '';

	req.on('data', function(chunk) {
		post += chunk;
	})
	req.on('end', function() {
		res.end(util.inspect(querystring.parse(post)));
	});
	console.log(post);

	
}).listen(3000);

console.log('The run.aa');