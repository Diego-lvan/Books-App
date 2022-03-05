const userRouter = require("express").Router();
const { addUser } = require("../controllers/user");
userRouter.post("/user", [addUser]);

module.exports = userRouter;
