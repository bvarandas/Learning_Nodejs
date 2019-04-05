var app = require('./config/Server');

var rotaNoticias    = require('./app/routes/noticias');
var rotaHome        = require('./app/routes/home');
var rotaFormulario  = require('./app/routes/formulario_inclusao_noticia');

rotaNoticias(app);
rotaHome(app);
rotaFormulario(app);

app.listen(3000, function(req, res)
    {
        console.log('Servidor ON');        
    });