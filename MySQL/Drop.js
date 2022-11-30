var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "myDB"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    var sql = "DROP TABLE students";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });