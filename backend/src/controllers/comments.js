const { query } = require("../config/conn");
const addComment = async (req, res, next) => {
  try {
    const { comment, isbn } = req.body;
    const userID = req.user.user_id;
    const sql = "INSERT INTO comment (user_id,comment,isbn) VALUES (?,?,?)";
    await query(sql, [userID, comment, isbn]);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (req, res) => {
  try {
    const { isbn } = req.params;
    const sql = `SELECT comment.comment_id, comment.user_id, comment.comment, comment.created_date, 
              comment.likes, comment.amount_replies, user.username 
              FROM comment INNER JOIN user 
              ON user.user_id = comment.user_id AND comment.isbn = ? ORDER BY created_date DESC;
`;
    const comments = await query(sql, [isbn]);
    res.json({ comments });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addComment, getComments };
