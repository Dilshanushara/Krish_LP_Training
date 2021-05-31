var http = require('http');
const CountingRepetitionCharacters= require('./CountingRepetitionCharacters');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write("CountingRepetitionCharacters.output");
  res.end();
}).listen(8080); 

