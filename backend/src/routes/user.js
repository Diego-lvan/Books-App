const userRouter = require("express").Router();
const passport = require("passport");
const upload = require("../middlewares/uploadUserImg");
const { addUser, updateUser } = require("../controllers/user");
userRouter.post("/user", addUser, passport.authenticate("local"), (req, res) => {
  res.json({ success: true, user: req.user });
});

userRouter.put("/user", upload.single("img"), updateUser);

module.exports = userRouter;
