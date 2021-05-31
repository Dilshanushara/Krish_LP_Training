var http = require('http');
const CheckForAnagram = require('./CheckForAnagram');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(CheckForAnagram.output);
  res.end();
}).listen(8080); 

