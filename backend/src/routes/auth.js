const authRouter = require("express").Router();
const passport = require("passport");
//login user
authRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, user: req.user });
});

//is user logged in
authRouter.get("/login", (req, res) => {
  if (req.user) {
    return res.json({ user: req.user });
  }
  res.json({ success: false });
});

module.exports = authRouter;
