var http = require('http');
const SelectionSort = require('./SelectionSort');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(SelectionSort.output);
  res.end();
}).listen(8080); 

