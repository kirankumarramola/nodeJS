var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://kirankumarramola:kiran1234@cluster0.apvyog4.mongodb.net/test";

// lookup - to perform left outer join
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("NodejsDB");
    var join =[{$lookup:{from:'students',localField:"name",foreignField:"tname",as:"clgToppers"}}];
    dbo.collection('toppers').aggregate(join).toArray(function(err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
      db.close();
    });
  });