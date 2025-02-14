// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.html', function(err, data) {comments
    res.write(data);
    res.end();
  });
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');