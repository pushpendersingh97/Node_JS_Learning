const http = require("http");

const requestHandler = require("./route.js");

const server = http.createServer(requestHandler);

server.listen(3000);