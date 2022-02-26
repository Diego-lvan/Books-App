const authRouter = require("express").Router();
const passport = require("passport");
//login user
authRouter.post("/login", (req, res) => {
  res.json({ success: true, email: req.user });
});

module.exports = authRouter;
