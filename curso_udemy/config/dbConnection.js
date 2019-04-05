var mysql = require('mysql');

var connMySql = function(){
    console.log('conexão com o bd foi estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user:  'root',
        password: '1234',
        database: 'portal_noticias'
    });
}
module.exports = function(){
    console.log('o Autoload carrgou o módulo de conexão com o bd');
    return connMySql;
}