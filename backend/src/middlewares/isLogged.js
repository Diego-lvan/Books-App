const isLogged = (req, res, next) => {
  // console.log(req.user + "is logged");
  if (req.user) {
    return next();
  }
  console.log("unauthorized");
  res.json({ success: false, msg: "unauthorized" });
};

module.exports = isLogged;
