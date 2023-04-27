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
            if (fullname == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập họ và tên" })
            }
            else if (numberphone == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập số điện thoại" })
            }
            else if (email == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập Email" })
            }
            else if (accessgroup == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập nhóm truy cập" })
            }
            else if (workingroom == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập phòng làm việc" })
            }
            else if (position == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập chức vụ" })
            }
            else if (employeecode == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập mã nhân viên" })
            }
            else if (address == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập  địa chỉ" })
            }
            else if (facebook == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập link facebook" })
            }
            else if (numbercccd == "") {
                return res.status(401).json({ data: false, message: "yêu cầu nhập số CCCD/CMNN" })
            }
            
            else {
                sql = "insert into user(fullname, accessgroup, workingroom, position, employeecode, address, facebook, numbercccd, numberphone, email ) value ( '" + fullname + "', '" + accessgroup + "', '" + workingroom + "', '" + position + "',  '" + employeecode + "', '" + address + "', '" + facebook + "', '" + numbercccd + "', '" + numberphone + "','" + email + "') ";
                con.query(sql, function (err) {
                    if (err) {
                        console.log(err)
                        return res.status(401).json({ data: false, message: " that bai" });
                    }
                    return res.status(200).json({ data: true, message: " thêm nhân viên thành công" })
                })
            }
        })
    }
}