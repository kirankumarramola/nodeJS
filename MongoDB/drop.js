var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("demodb");
    var col = "demoCol";
    dbo.collection(col).drop(function (err,res){
        if(err) throw err;
        if(res)
        console.log("Collection Deleted");
    });
});