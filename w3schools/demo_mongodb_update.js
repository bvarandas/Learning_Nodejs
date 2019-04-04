var MongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoCliente.connect(url, function(err,db){
    if (err) throw err;
    var dbo = db.db('mydb');
    var myquery = {address: 'Valley 345'};
    var newValues = {$set: {name: 'Michey', address: 'Canyon 123'}};

    dbo.collection("customers").updateOne(myquery, newValues, function(err, res){
        if (err) throw err;
        console.log("1 document updated")
        db.close();
    });

});