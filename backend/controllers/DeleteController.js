let con = require('../connectDB/connectDB');

let deleteOneUser = async (req, res) => {
    let { userid } = req.query;
    console.log(userid)
    let slqQuery = `DELETE FROM user WHERE userid = ${userid};`
    con.query(slqQuery, (err, result) => {
        if (err) return res.status(401).send("Hệ thống xảy ra lỗi");
        if (!result.affectedRows) return res.status(401).send("Không xác định");
        return res.status(200).send("OK")
    })
}

module.exports = {
    deleteOneUser
}