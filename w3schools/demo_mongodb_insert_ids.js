var MongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoCliente.connect(url, function(err, db){
    if (err) throw err;

    var dbo = db.db("mydb");
/*
    var myobj = [
        {_id: 154, name: 'Chocolate Heaven'},
        {_id: 155, name: 'Tasty Lemon'},
        {_id: 156, name: 'Vanilla Dream'}
    ];
*/
    var myobj = [{_id: 1, product_id: 154, status: 1}];

    //dbo.collection("products").insertMany(myobj, function(err, res){
    dbo.collection("orders").insertMany(myobj, function(err, res){
        if (err) throw err;
        console.log(res);
        db.close();
    });
});