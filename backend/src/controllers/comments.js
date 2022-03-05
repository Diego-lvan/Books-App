const { query } = require("../config/conn");
const addComment = async (req, res, next) => {
  try {
    const { comment, isbn } = req.body;
    const userID = req.user.user_id;
    const sql = "INSERT INTO comment (user_id,comment,isbn) VALUES (?,?,?)";
    await query(sql, [userID, comment, isbn]);
    req.params.isbn = isbn;
    next();
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (req, res) => {
  try {
    const { isbn } = req.params;
    const sql = "SELECT * FROM comment WHERE isbn = ? ORDER BY created_date DESC";
    const comments = await query(sql, [isbn]);
    res.json({ comments });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addComment, getComments };
