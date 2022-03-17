const isAdmin = (req, res, next) => {
  if (req?.user?.isAdmin === 1) {
    return next();
  }
  res.json({ success: false, msg: "unauthorized" });
};

module.exports = isAdmin;
