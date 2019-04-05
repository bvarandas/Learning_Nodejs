//var dbConnection = require('../../config/dbConnection')

module.exports = function(app) {
    

    app.get('/noticias', function(req, res){

        var connection = app.config.dbConnection();// dbConnection();

        connection.query('select * from noticias', function(err, result){
            if (err) throw err;
            res.render('noticias/noticias', {noticias: result});
        });
    });
};