var MongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoCliente.connect(url, function(err, db){
    if (err) throw err;
    
    var dbo = db.db("mydb");

    var query = {address:  /38/};

    dbo.collection("customers").find(query).toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        db.close();
    });
});