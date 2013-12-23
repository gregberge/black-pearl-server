var http = require('http');
var Primus = require('primus');

var server = http.createServer();
var primus = new Primus(server);

primus.on('connection', function () {
  console.log('ok');
});

server.listen(9400);