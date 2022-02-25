const userRouter = require("express").Router();
const { addUser } = require("../controllers/user");
userRouter.post("/user/add", [addUser]);
userRouter.get("/user/add", (req, res) => {
  res.json({ hola: "hola" });
});

module.exports = userRouter;
