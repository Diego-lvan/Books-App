const { query } = require("../config/conn");
const { promisify } = require("util");
const bcrypt = require("bcrypt");

const addUser = async (req, res, next) => {
  const { email, pwd, user } = req.body;

  if (!email || !pwd || !user || email.length > 50 || user.length > 20) {
    return res.json({ sucess: false, status: 400 });
  }
  const sql = "INSERT INTO user (email,password,username) VALUES (?,?,?)";
  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    await query(sql, [email, hashedPwd, user]);
  } catch (error) {
    console.log(error);
    return res.json({ success: false });
  }
  res.json({ success: true, status: 201 });
};

const updateUser = async (req, res) => {
  try {
    const { userID } = req.user;
    const { email, user } = req.body;
    const sql = "UPDATE user SET email = ?, username = ? WHERE user_id = ?";
    await query(sql, [email, user, userID]);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addUser, updateUser };
