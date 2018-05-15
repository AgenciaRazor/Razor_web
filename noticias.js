var http = require('http');

var server = http.createServer(function(req,res){

    res.end("Aeee");

}).listen(3000);