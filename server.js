var sys = require('sys'),
    http = require('http'),
    httpProxy = require('http-proxy');

var proxy = new httpProxy.RoutingProxy();

http.createServer(function (req, res){
	req.headers.host = 'cowboyhacks.com'
	proxy.proxyRequest(req, res, {
		host: 'cowboyhacks.com',
		port: 80
	});
//  console.log(req.url)
}).listen(80);
