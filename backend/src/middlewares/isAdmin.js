const isAdmin = (req, res, next) => {
  if (res?.user?.isAdmin) {
    next();
  }
  console.log("is not admin");
  res.json({ success: false, msg: "unauthorized" });
};

module.exports = isAdmin;
