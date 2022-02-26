const userRouter = require("express").Router();
const { addUser } = require("../controllers/user");
userRouter.post("/user/add", [addUser]);

module.exports = userRouter;
