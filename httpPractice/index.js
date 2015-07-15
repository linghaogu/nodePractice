"use strict"

var server = require("./server");
var route = require("./route");
var requestHandlers = require("./requestHandlers");
var handlers = handlers || {};

handlers["/"] = requestHandlers.linghao;
handlers["/favicon.ico"] = function dump(){};
handlers["/linghao"] = requestHandlers.linghao;
handlers["/yisong"] = requestHandlers.yisong;

server.start(route.route, handlers);