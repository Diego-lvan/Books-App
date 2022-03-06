const commentsRouter = require("express").Router();
const {
  addComment,
  getComments,
  addLike,
  getCommentsLikes,
} = require("../controllers/comments");
//add new comment
commentsRouter.post("/comment", addComment, getComments);
//get comments
commentsRouter.get("/comment/:isbn", getComments);

//delete comment

//add like to a comment
commentsRouter.post("/comment/like", addLike);

//get likes from a comment
commentsRouter.get("/comment/like/:commentID", getCommentsLikes);

module.exports = commentsRouter;
