var http = require('http');
const LinearSearch = require('./LinearSearch');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(LinearSearch.exportoutput);
  res.end();
}).listen(8080); 

