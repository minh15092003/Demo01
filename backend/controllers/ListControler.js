var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc@123",
    database: "sskpi"
})
module.exports = {
    get: (req, res) => {
        let sql = " SELECT  userid ,fullname , email ,  workingroom, position, employeecode, address , facebook, numbercccd , numberphone  , accessgroup  From user";
        con.query(sql, function (err, results) {
            if (err) throw err;
            var user = results;
            console.log(results);
            return res.status(200).json({ data: user, message: " thêm thành công" })
        })
    }
}