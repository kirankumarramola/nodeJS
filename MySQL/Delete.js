var mysql = require('mysql');
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'myDB'
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM Emp WHERE id = '109'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });