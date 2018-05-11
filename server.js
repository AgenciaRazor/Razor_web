var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = 8080;



app.listen(port);
console.log('Servidor HTTP esta em execução na porta ' + port);