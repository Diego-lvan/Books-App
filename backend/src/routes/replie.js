const replieRouter = require("express").Router();
const { addReplie, getReplies } = require("../controllers/replie");

//add new replie
replieRouter.post("/replie", addReplie);

// get replies by comment id
replieRouter.get("/replie/:commentID", getReplies);

module.exports = replieRouter;
