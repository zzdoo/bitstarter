var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var content = fs.readFileSync('./index.html')
var str = content.toString();

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
