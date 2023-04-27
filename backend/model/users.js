const Conn = require("../connectDB/connectDB");
class users {
  findByuserid = (userid) => {
    return new Promise((resolve, reject) => {
      Conn.query(
        "SELECT * FROM user Where userid =?", [userid],
        function (err, data) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(data);
          }  
        }
      );
    });
  };
  setnewpassword = (data) => {
    return new Promise((resolve, reject) => {
      Conn.query(
        "UPDATE user SET Password=? WHERE userid =?", [data.password, data.userid], 
        function (err, data) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(data);
          }
        }
      );
    });
  };
}
module.exports = new users();
