var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

// to insert documents
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("NodejsDB");
    var obj = {name:"kishore",age:20,branch:"cse"}; // for single document
    var obj = [   //for multiple documents
        {name:"sai",age:22,branch:"mech"},
        {name:"kranthi",age:23,branch:"civil"},
        {name:"nikhil",age:23,branch:"ece"},
        {name:"pawan",age:21,branch:"eee"},
        {name:"rakesh",age:20,branch:"cse"},
        {name:"ravi",age:19,branch:"it"},
        {name:"sunil",age:23,branch:"mech"},
        {name:"arjun",age:21,branch:"eee"},
        {name:"arun",age:21,branch:"civil"}
    ];
    //dbo.collection("students").insertOne(obj,function(err,res){
    dbo.collection("students").insertMany(obj,function(err,res){
        if(err) throw err;
        //console.log("1 document inserted");
        console.log(res.insertedCount + " rows inserted");
        db.close();
    });
});