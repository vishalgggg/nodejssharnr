const http = require('http');
const route = require('./read_write');
server = http.createServer(route.handler);
server.listen(4000)
