module.exports = function(application) {

    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        //res.send(noticia);

        var connection = application.config.dbConnection();

        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia,  function (err, result){
            if (err) throw err;
            res.redirect('/noticias');
        });
    });
};