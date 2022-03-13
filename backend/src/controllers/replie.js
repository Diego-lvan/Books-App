const { query } = require("../config/conn");

const addReplie = async (req, res) => {
  try {
    const { commentID, replie, userID } = req.body;
    // const { userID } = req.user;
    const sql = "INSERT INTO replie (comment_id, replie, user_id) VALUES (?,?,?)";
    await query(sql, [commentID, replie, userID]);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const getReplies = async (req, res) => {
  try {
    let { commentID } = req.params;
    commentID = parseInt(commentID);
    console.log(commentID);
    const sql = `SELECT r.*, u.user_img 
              FROM replie r 
              INNER JOIN user u ON u.user_id = r.user_id
              INNER JOIN comment c ON c.comment_id = r.comment_id AND c.comment_id = ?`;
    const replies = await query(sql, [commentID]);
    res.json({ replies });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addReplie, getReplies };
