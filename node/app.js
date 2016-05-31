// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 1337;

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//const http = require('http');

// const hostname = '120.0.0.1';
// const port = 1337;

// http.createServer((req,res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/plain'});
// 	res.end('hello woorld\n');
// }).listen(port,hostname,() => {
// 	console.log('Server run at http://${hostname}:${port}/')
// });
 
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req,res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(port,hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log('Server run at http://${hostname}:${port}/',hostname,port);
});