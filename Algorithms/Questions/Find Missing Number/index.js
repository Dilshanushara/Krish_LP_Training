var http = require('http');
const FindMissingNumber = require('./FindMissingNumber')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Missing number is: "+FindMissingNumber.output);
  res.end();
}).listen(8080); 

