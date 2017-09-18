var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hello World\n');
}).listen(1008, '127.0.0.1');

// Console will print the message
console.log('Server running at http://127.0.0.1:1008/ or you can use http://localhost:1008/');