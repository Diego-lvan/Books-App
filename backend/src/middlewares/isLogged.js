const isLogged = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.json({ success: false, msg: "unauthorized" });
};

module.exports = isLogged;
