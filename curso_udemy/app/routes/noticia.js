//var dbConnection = require('../../config/dbConnection')

module.exports = function(application) {
    

    application.get('/noticia', function(req, res){

        var connection = application.config.dbConnection();// dbConnection();
        var noticiaModel = application.app.models.noticiasModel;

        noticiaModel.getNoticia(connection, function(err, result){
            if (err) throw err;
            res.render('noticias/noticia', {noticia: result});
        });
    });
};