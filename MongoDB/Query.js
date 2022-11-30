var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("NodejsDB");
    var query = {age:21}; 
    var query = {name: /^k/}; // using regular expression name starting with k
    dbo.collection("students").find(query).toArray(function (err,res){
        if(err) throw err;
        console.log(res);
    });
});