module.exports.index = function(application,req,res){
    res.render('index',{validacao:{},dadosForm:{}});
}

module.exports.autenticar = function(application,req,res){

    var dadosForm = req.body;

    req.assert('usuario','Usuario não deve ser vazio').notEmpty();
    req.assert('senha','Senha inválida').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("index",{validacao:erros,dadosForm:dadosForm});
        return;
    }
    
    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.autenticar(dadosForm,req,res);

    //res.send("Tudo ok para o Login !");

}