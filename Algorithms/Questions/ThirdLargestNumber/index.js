var http = require('http');
const ThirdLargestNumber = require('./ThirdLargestNumber');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Third Largest number of the array is:  "+ThirdLargestNumber.output);
  res.end();
}).listen(8080); 

