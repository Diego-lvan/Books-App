const replyRouter = require("express").Router();
const { addReply, getReplies, addLike, getLikes } = require("../controllers/reply");
const isLogged = require("../middlewares/isLogged");

//add new replie
replyRouter.post("/reply", addReply);

// get replies by comment id
replyRouter.get("/reply/:commentID", isLogged, getReplies);

// get likes
replyRouter.get("/reply/likes/:replyID", isLogged, getLikes);

//add like
replyRouter.post("/reply/like", isLogged, addLike);

module.exports = replyRouter;
