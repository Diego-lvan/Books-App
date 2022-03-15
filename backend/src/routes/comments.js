const commentsRouter = require("express").Router();
const isLogged = require("../middlewares/isLogged");

const {
  addComment,
  getComments,
  addLike,
  getCommentsLikes,
} = require("../controllers/comments");
//add new comment
commentsRouter.post("/comment", isLogged, addComment, getComments);
//get comments
commentsRouter.get("/comment/:isbn", isLogged, getComments);

//delete comment

//add like to a comment
commentsRouter.post("/comment/like", isLogged, addLike);

//get likes from a comment
commentsRouter.get("/comment/like/:commentID", isLogged, getCommentsLikes);

module.exports = commentsRouter;
