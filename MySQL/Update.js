var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "myDB"
});

con.connect(function(err){
    if(err) throw err;
    var sql = "UPDATE emp SET name='mahesh' WHERE name='jeevan'";
    con.query(sql,function(err,res){
        if(err) throw err;
        console.log(res);
    });
});