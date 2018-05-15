var app = require('./config/server');

//var rotaIndex = require('./app/routes/index')(app);
//var rotaNoticias = require('./app/routes/cadastro')(app);


app.listen(3000,function(){
    console.log('Servidor ON');
});