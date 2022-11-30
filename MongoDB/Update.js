var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("NodejsDB");
    // for single document updation
    var query = {name:"sai"}; 
    var values = {$set:{name:"saikiran"}};
    // for multiple document updation
    var query = {age:{$gt:18}};
    var values = {$set:{location:"hyderabad"}};
    dbo.collection("students").updateMany(query,values,function (err,res){
        if(err) throw err;
        console.log("location added");
    });
});