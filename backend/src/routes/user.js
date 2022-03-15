const userRouter = require("express").Router();
const passport = require("passport");
const upload = require("../middlewares/uploadUserImg");
const isLogged = require("../middlewares/isLogged");
const { addUser, updateUser } = require("../controllers/user");

//create new user
userRouter.post("/user", addUser, passport.authenticate("local"), (req, res) => {
  res.json({ success: true, user: req.user });
});

//update user image
userRouter.put("/user", isLogged, upload.single("img"), updateUser);

module.exports = userRouter;
