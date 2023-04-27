var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc@123",
    database: "sskpi"
})
module.exports = {
    post: (req, res) => {
        var fullname = req.body.fullname;
        var numberphone = req.body.numberphone;
        var email = req.body.email;
        var accessgroup = req.body.accessgroup;
        var workingroom = req.body.workingroom;
        var position = req.body.position;
        var employeecode = req.body.employeecode;
        var address = req.body.address;
        var facebook = req.body.facebook;
        var numbercccd = req.body.numbercccd;
        let sql = " SELECT * FROM user";
        con.query(sql, function (err, results) {
            if (err) throw err;
          
            else {
                let sql = " SELECT * FROM user Where email = '" + email + "'";
                con.query(sql, (err, results) => {
                    if(err) {
                        return res.status(401).json({data: false, message: err.message});
                    }
                    if(results.length == 0) {
                       let sql = "insert into user(fullname, accessgroup, workingroom, position, employeecode, address, facebook, numbercccd, numberphone, email ) value ( '" + fullname + "', '" + accessgroup + "', '" + workingroom + "', '" + position + "',  '" + employeecode + "', '" + address + "', '" + facebook + "', '" + numbercccd + "', '" + numberphone + "','" + email + "') ";
                        con.query(sql, (err) => {
                            if(err) {
                                return res.status(401).json({data: false, message: err.message});
                            }
                            return res.status(200).json({data: true, message: "Thanh cong"})
                        })
                    }
                })
            }
        })
    }
}