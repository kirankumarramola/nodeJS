var mysql = require('mysql');
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'myDB'
});

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE Emp (id VARCHAR(10),name VARCHAR(30))";
    con.query(sql,function(err,res){
        if(err) throw err;
        console.log("Table Created");
    });

});