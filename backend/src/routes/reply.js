const replyRouter = require("express").Router();
const { addReply, getReplies, addLike, getLikes } = require("../controllers/reply");

//add new replie
replyRouter.post("/reply", addReply);

// get replies by comment id
replyRouter.get("/reply/:commentID", getReplies);

// get likes
replyRouter.get("/reply/likes/:replyID", getLikes);

//add like
replyRouter.post("/reply/like", addLike);

module.exports = replyRouter;
