const commentsRouter = require("express").Router();
const { addComment, getComments } = require("../controllers/comments");
//add new comment
commentsRouter.post("/comment", addComment, getComments);
//get comments
commentsRouter.get("/comment/:isbn", getComments);

//delete comment

module.exports = commentsRouter;
