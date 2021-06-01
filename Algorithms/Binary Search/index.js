var http = require('http');
const BinarySearch = require('./BinarySearch');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(BinarySearch.exportoutput);
  res.end();
}).listen(8080); 

