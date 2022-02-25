const { query } = require("../config/conn");
const bcrypt = require("bcrypt");

const addUser = async (req, res, next) => {
  console.log(req.body);
  console.log("requested");
  const { email, pwd, user } = req.body;
  if (!email || !pwd || !user || email.length > 50 || user.length > 20) {
    return res.json({ sucess: false, status: 400 });
  }
  const sql =
    "INSERT INTO user (email,password,username,img_path) VALUES (?,?,?,?)";
  try {
    await query(sql, [email, pwd, user, "src/public/users/user.png"]);
  } catch (error) {
    console.log(error);
    return res.json({ sucess: false });
  }
  res.json({ sucess: true, status: 201 });
};

module.exports = { addUser };
