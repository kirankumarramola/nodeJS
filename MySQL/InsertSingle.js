var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "myDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO emp (id, name) VALUES ('109', 'mahesh')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted "+ "ID : "+result.insertId);
  });
});