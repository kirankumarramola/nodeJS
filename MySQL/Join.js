var mysql = require('mysql');
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'myDB'
});

con.connect(function(err) {
    if (err) throw err;
    console.log(__filename ); // to get file name and path
    var sql = "SELECT emp.name AS Employee, dept.dname AS Department FROM emp JOIN dept ON emp.deptno = dept.deptno";
    // we can also use Inner join in place of join
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  