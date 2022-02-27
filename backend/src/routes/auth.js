const authRouter = require("express").Router();
const passport = require("passport");
//login user
authRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, email: req.user });
});

module.exports = authRouter;
