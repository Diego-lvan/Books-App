const { query } = require("../config/conn");

const addReply = async (req, res) => {
  try {
    const { commentID, reply } = req.body;
    const { userID } = req.user;
    const sql = "INSERT INTO reply (comment_id, reply, user_id) VALUES (?,?,?)";
    await query(sql, [commentID, reply, userID]);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const getReplies = async (req, res) => {
  try {
    let { commentID } = req.params;
    commentID = parseInt(commentID);
    const sql = `SELECT r.*, u.user_img, u.username 
              FROM reply r 
              INNER JOIN user u ON u.user_id = r.user_id
              INNER JOIN comment c ON c.comment_id = r.comment_id AND c.comment_id = ? ORDER BY r.reply_id ASC`;
    const replies = await query(sql, [commentID]);
    console.log(replies);
    res.json({ replies });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addReply, getReplies };
