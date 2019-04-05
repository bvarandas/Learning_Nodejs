module.exports = function(application) {

    application.get('/noticias', function(req, res){

        var connection = application.config.dbConnection();

        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias( function (err, result){
            if (err) throw err;
            res.render('noticias/noticias', {noticias: result});
        });
    });
};