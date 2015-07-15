"use strict";
var http = require("http");
var url = require("url");

function start(route, handlers) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log(pathname);

		route(pathname, handlers);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hahah");
		response.end();
	}
	http.createServer(onRequest).listen(3000);
}

exports.start = start;
