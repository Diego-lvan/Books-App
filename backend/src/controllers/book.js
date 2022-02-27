const { query } = require("../config/conn");

const addBook = async (req, res, next) => {
  const { isbn, tile } = req.body;
  res.json({ file: req.file });
  try {
  } catch (error) {}
};

module.exports = { addBook };
