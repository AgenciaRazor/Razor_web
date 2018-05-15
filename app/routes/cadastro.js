module.exports = function(app){
    //app.get('/cadastrar', function(req,res){
    //    res.render("cadastros/novo_salao");
    //})

    app.get('/cadastro',function(req,res){
        app.app.controllers.cadastro.cadastro(app,req,res);
    });

    app.post('/cadastrar',function(req,res){
        app.app.controllers.cadastro.cadastrar(app,req,res);
    });

};