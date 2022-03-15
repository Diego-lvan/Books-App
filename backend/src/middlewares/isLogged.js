const isLogged = (req, res, next) => {
  if (req.user) {
    next();
  }
  console.log("is not logged ");
  res.json({ success: false, msg: "unauthorized" });
};

module.exports = isLogged;
