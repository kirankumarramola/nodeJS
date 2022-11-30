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
  //var sql = "SELECT * FROM emp";
  //var sql = "SELECT name FROM emp";
  var sql = "SELECT name FROM emp where id = '101'"; //where
  var sql = "SELECT name FROM emp where name like '%n'";
  var name = 'mukesh'; var name1='jeevan';
  var sql = "SELECT id FROM emp where name = "+mysql.escape(name); //using variables
  var sql = "SELECT name FROM emp where name = ? OR name =?"; // ? will access the second parameter
  var sql = "SELECT * FROM emp ORDER BY name"; // order by name
  var sql = "SELECT * FROM emp ORDER BY id DESC"; //order by id in descending order
  var sql = "SELECT * FROM emp LIMIT 5"; // limit
  con.query(sql,[name,name1] ,function (err, result , fields) {
    if (err) throw err;
    console.log(result);
  });
});