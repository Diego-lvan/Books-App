const { query } = require("../config/conn");

const addMyBook = async (req, res) => {
  const { isbn, statusSelected } = req.body;
  const userID = req.user.user_id;
  const sql =
    "INSERT INTO my_books (user_id,isbn,status_id) VALUES (?,?,?) ON DUPLICATE KEY UPDATE status_id = ?";
  query(sql, [userID, isbn, statusSelected, statusSelected]);
  res.json({ success: true });
};

getMyBooks = async (req, res) => {
  const { isbn } = req.params;
  const userID = req.user.user_id;
  const sql = `SELECT status.status_id, status.status, my_books.score FROM status
      INNER JOIN my_books ON status.status_id = my_books.status_id AND my_books.user_id = ? AND isbn  = ?`;
  const [status] = await query(sql, [userID, isbn]);

  res.json({ success: true, ...status });
};

module.exports = { addMyBook, getMyBooks };
