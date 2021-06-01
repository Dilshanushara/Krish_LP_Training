var http = require('http');
const BubbleSort = require('./BubbleSort');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Sorted array is :  "+BubbleSort.output);
  res.end();
}).listen(8080); 

