module.exports = function(app){

    app.get('/', function(req,res){
        app.app.controllers.index.index(app,req,res);
        //res.render("index/index");
    });

    app.post('/autentica',function(req,res){
        app.app.controllers.index.autenticar(app,req,res);
        //res.send("Chegando aqui");
    });

    app.post('/cadastrar',function(req,res){
        app.app.controllers.index.autenticar(app,req,res);
        //res.send("Chegando aqui");
    });
}
