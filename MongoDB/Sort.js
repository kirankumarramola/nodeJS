var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("NodejsDB");
    var mysort = {age:1}; //for ascending
    var mysort = {name:1}; //for names in ascending order
    var mysort = {age:-1}; //for descending 
    dbo.collection("students").find({},{projection:{_id:0,branch:0}}).sort(mysort).toArray(function (err,res){
        if(err) throw err;
        console.log(res);
    });
});