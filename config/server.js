var express = require('express'); //importa o módulo Express
var consign = require('consign') //importa o módulo do consign
var bodyParser = require('body-parser'); //importa o módulo body-parser
var expressValidator = require('express-validator'); // importa o módulo express-validator
var expressSession = require('express-session');

var app = express(); //Inicializa o Objeto Express

// Setar as variaveis 'view engine' e 'views' do express
app.set('view engine','ejs');
app.set('views','./app/views');

// Configurar o middleware express.static
app.use(express.static('./app/public'));

// configurar o middleware body-parse
app.use(bodyParser.urlencoded({extended:true}));

// configurar o middleware express validator
app.use(expressValidator());

// Configura o middleware express session
app.use(expressSession({
    secret:'efijvkvnjos231ds5#@!#!@fsdj',
    resave:false,
    saveUnitialized:false
}));

// efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign().include('app/routes').then('app/models').then('app/controllers').then('config/dbConnection.js').then('app/api').into(app);
//
// exporta o objeto app
module.exports = app;
