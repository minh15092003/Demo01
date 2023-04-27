var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc@123",
    database: "sskpi"
})

module.exports = {
    post: (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        var sql = " SELECT * FROM user Where username = '" + username + "'";
        con.query(sql, function (err, results) {
            if (err) throw err;
            var user = results[0];
            console.log(results);
            if (user == undefined) {
                return res.status(401).json({ data: false, message: "tai khoan ko ton tai" })
            } else if (user.password != password){ 
                return res.status(401).json({ data: false, message: "mat khau khong dung" })
            }
            else
                return res.json({ data:  user, message: "dang nhap thanh cong" })
        })
    }
}