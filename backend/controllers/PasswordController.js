const User = require("../model/users");
module.exports = {
  update: async (req, res) => {
    const { userid, password, newpassword, enterpassword } = req.body;
    const user = await User.findByuserid(userid);
    try {

      if (user[0].password !== password)
        return res
          .status(300)
          .json({ data: userid, message: "Mật khẩu cũ không chính xác" });
      if (newpassword !== enterpassword)
        return res
          .status(300)
          .json({ data: userid, message: "Mật khẩu không trùng khớp" });
      await User.setnewpassword({
        password: newpassword,
        userid: userid,
      }).then((result) => {
        return res.status(200).json({
          data: result[0],
          message: "Đổi mật khẩu thành công",
        });
      });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error server",
      });
    }
  },
};
