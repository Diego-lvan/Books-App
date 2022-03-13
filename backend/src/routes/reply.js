const replyRouter = require("express").Router();
const { addReply, getReplies } = require("../controllers/reply");

//add new replie
replyRouter.post("/reply", addReply);

// get replies by comment id
replyRouter.get("/reply/:commentID", getReplies);

module.exports = replyRouter;
