
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abc@123",
  database: "sskpi",
});
con.connect(function (err) {
  if (err) throw err.stack;
  console.log("ket noi thanh cong");
});
module.exports = con;