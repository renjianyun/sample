var express = require('express');

var app = new express();


app.set('view engine','jade');
app.set('views','./views');


app.get('/',function(req,res) {
	//res.send('hello world');
	res.render('index',{title: 'Hey', message: 'Hello there!'});
});

app.use(function(err,req,res,next {
	console.log(err.stack);
	res.status(500).send('something broke!');
}));


// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...');
//   next(); // pass control to the next handler
// });

// // 匹配根路径的请求
// app.get('/', function (req, res) {
//   res.send('root');
// });

// // 匹配 /about 路径的请求
// app.get('/about', function (req, res) {
//   res.send('about');
// });

// // 匹配 /random.text 路径的请求
// app.get('/random.text', function (req, res) {
//   res.send('random.text');
// });

// // 匹配 acd 和 abcd
// app.get('/ab?cd', function(req, res) {
//   res.send('ab?cd');
// });

// // 匹配 abcd、abbcd、abbbcd等
// app.get('/ab+cd', function(req, res) {
//   res.send('ab+cd');
// });

// // 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
// app.get('/ab*cd', function(req, res) {
//   res.send('ab*cd');
// });

// // 匹配 /abe 和 /abcde
// app.get('/ab(cd)?e', function(req, res) {
//  res.send('ab(cd)?e');
// });

// // 匹配任何路径中含有 a 的路径：
// app.get(/a/, function(req, res) {
//   res.send('/a/');
// });

// // 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
// app.get(/.*fly$/, function(req, res) {
//   res.send('/.*fly$/');
// });

// var cookieParser = require('cookie-parser');
// app.use(cookieParser());

var server = app.listen(3000,function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});