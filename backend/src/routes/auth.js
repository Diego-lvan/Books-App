const authRouter = require("express").Router();
const passport = require("passport");
//login user
authRouter.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json({ success: true, email: req.user });
});

module.exports = authRouter;
