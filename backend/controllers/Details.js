let mysql = require('mysql');
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc@123",
    database: "sskpi"
})

module.exports = {
    get: (req, res) => {
        let userid = req.query.userid;
        sql = " SELECT  userid ,fullname , email ,  workingroom, position, employeecode, address , facebook, numbercccd , numberphone  , accessgroup  FROM user WHERE userid = '" + userid + "'";
  
        con.query(sql, function (err, results) {
            if (err) throw err;
            return res.status(200).json({ data: results })

        })
    },


}