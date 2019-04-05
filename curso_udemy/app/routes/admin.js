module.exports = function(application) {

    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia',{validacao:{}, noticia:{}});
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        //res.send(noticia);
        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracterer').len(10,100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data_noticia','Data é obrigatório').notEmpty()
        req.assert('data_noticia','Data não está no formato correto').isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Noticia é obrigatório').notEmpty();

        var errors = req.validationErrors();

        if(errors)
        {
            console.log(errors);
            res.render('admin/form_add_noticia', {validacao: errors, noticia: noticia} );
            return;            
        }

        var connection = application.config.dbConnection();

        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia,  function (err, result){
            if (err) throw err;
            res.redirect('/noticias');
        });
    });
};