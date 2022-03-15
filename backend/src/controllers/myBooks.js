const { query } = require("../config/conn");

const addMyBook = async (req, res) => {
  const { isbn, statusSelected } = req.body;
  const { userID } = req.user;
  if (!isbn || !statusSelected || !userID) return res.json({ success: false });
  const sql =
    "INSERT INTO my_books (user_id,isbn,status_id) VALUES (?,?,?) ON DUPLICATE KEY UPDATE status_id = ?";
  query(sql, [userID, isbn, statusSelected, statusSelected]);
  res.json({ success: true });
};

const getMyBooks = async (req, res) => {
  const { isbn } = req.params;
  const { userID } = req.user;
  if (!isbn || !userID) return res.json({ success: false });
  const sql = `SELECT status.status_id, status.status, my_books.score FROM status
      INNER JOIN my_books ON status.status_id = my_books.status_id AND my_books.user_id = ? AND isbn  = ?`;
  const [status] = await query(sql, [userID, isbn]);

  res.json({ success: true, ...status });
};

const deleteMyBook = async (req, res) => {
  try {
    const { isbn } = req.params;
    const { userID } = req.user;
    if (!isbn || !userID) return res.json({ success: false });
    const sql = "DELETE FROM my_books WHERE user_id = ? AND isbn = ?";
    await query(sql, [userID, isbn]);
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
};

const rateBook = async (req, res) => {
  try {
    const { isbn, score } = req.body;
    const { userID } = req.user;
    console.log(userID, isbn);
    const sql = "UPDATE my_books SET score = ? WHERE isbn = ? AND user_id = ?";
    await query(sql, [score, isbn, userID]);
    res.json({ success: true });
  } catch (error) {}
};

const getScore = async (req, res) => {
  const { isbn } = req.params;
  const { userID } = req.user;
  const sql = "SELECT score FROM my_books WHERE isbn = ? AND user_id = ? ";
  const score = await query(sql, [isbn, userID]);
  res.json({ score: score[0]?.score });
};

module.exports = { addMyBook, getMyBooks, deleteMyBook, rateBook, getScore };
