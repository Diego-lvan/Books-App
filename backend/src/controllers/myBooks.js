const { query } = require("../config/conn");

const addMyBook = async (req, res) => {
  const { isbn, statusSelected } = req.body;
  const userID = req.user.user_id;
  const sql =
    "INSERT INTO my_books (user_id,isbn,status_id) VALUES (?,?,?) ON DUPLICATE KEY UPDATE status_id = ?";
  query(sql, [userID, isbn, statusSelected, statusSelected]);
  res.json({ success: true });
};

module.exports = { addMyBook };
