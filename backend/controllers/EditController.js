var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc@123",
    database: "sskpi"
})
module.exports = {
    put: (req, res) => {
        let { fullname, email, workingroom, position, employeecode, address, facebook, numbercccd, numberphone, accessgroup, userid } = req.body;
        if (!(fullname && email && workingroom && position && employeecode && address && facebook && numbercccd && numberphone && accessgroup && userid)) return res.status(400).json({ data: false, message: "yêu cầu nhập tất cả các thông tin còn thiếu" })

        let query = `UPDATE user 
                SET
                    fullname = '${fullname}',
                    email = '${email}',
                    accessgroup = '${accessgroup}',
                    workingroom = '${workingroom}',
                    position = '${position}',
                    employeecode = ${employeecode},
                    address = '${address}',
                    facebook = '${facebook}',
                    numbercccd = '${numbercccd}',
                    numberphone = '${numberphone}'
                WHERE
                userid = ${userid};`
        con.query(query, function (err, result) {
            if (err) return res.status(500).send(err);
            if (result.affectedRows === 0) return res.status(404).send("User not found !");
            return res.status(200).json({ data: true, message: " sửa nhân viên thành công" })
        })
    }


}