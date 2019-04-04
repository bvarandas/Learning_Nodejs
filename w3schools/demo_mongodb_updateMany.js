var MongoCliente = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoCliente.connect(url, function(err, db){
    if(err) throw err;

    var dbo = db.db("mydb");

    var myquery = {address: /^S/};
    var newValues = { $set: {name: "George of the jungle"}};

    dbo.collection("customers").updateMany(myquery, newValues, function(err, res){
        if (err) throw err;

        console.log(res.result.nModified + " document(s) updated");

        db.close();
    });
});