var MongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoCliente.connect(url, function(err, db){
    if (err) throw err;

    var dbo = db.db("mydb");

    //var myquery = {adress: 'Mountain 21'};
    var myquery = {product: 154};

    dbo.collection('orders').deleteOne(myquery, function(err, obj){
        if (err) throw err;

        console.log("1 document deleted");

        db.close();
     });
});