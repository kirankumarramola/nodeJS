var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("NodejsDB");
    var query = {name:"sunil"};
    //dbo.collection("students").deleteOne(query,function (err,res) // for deleting one document
    var query = {age:{$lt:18}};
    dbo.collection("students").deleteMany(query,function (err,res) //for deleting multiple documents
    {
        if(err) throw err;
        console.log(res.deletedCount+" rows deleted");
    });
});