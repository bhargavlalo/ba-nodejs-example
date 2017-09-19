/*
Require to install request timeout module

npm install request-timeout

*/
var timeout = require('request-timeout');
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log('starting...');
  res.write("Hello world");
  timeout(req, res, 5);// set timeout to 60 seconds (default is 20)
  req.on('timeout', function() {
    console.log('The request timed out');
    res.end('\nThe request timed out');
  })
}

server.listen(1008);