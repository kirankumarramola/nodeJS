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
  var sql = "INSERT INTO emp (id, name) VALUES ?";
  var values = [
    ["102","akhil"],
    ["103","srines"],
    ["104","anjan"],
    ["105","harish"],
    ["106","praneeth"],
    ["107","mukesh"],
  ];
  con.query(sql, [values] , function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});
});