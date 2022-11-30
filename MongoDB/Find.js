var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("NodejsDB");
    /* to find single document
    dbo.collection("students").findOne({},function(err,res)
    {
        if(err) throw err;
        console.log(res.name);
        db.close();
    });
    */ 
    /* to find multiple documents
    dbo.collection("students").find({}).toArray(function(err,res)
    {
        if(err) throw err;
        console.log(res);
        db.close();
    });
    */
    // to get required data using projection
    /*dbo.collection("students").find({},{projection:{_id:0,branch:0}}).toArray(function(err,res)
    {
        if(err) throw err;
        console.log(res);
        console.log(res[5].name); // to get single data from res array

        db.close();
    });
    */ 
    // using limit
    dbo.collection("students").find({},{projection:{_id:0,branch:0}}).limit(5).toArray(function(err,res)
    {
        if(err) throw err;
        console.log(res);
        db.close();
    });

});