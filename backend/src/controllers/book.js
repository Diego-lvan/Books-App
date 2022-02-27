const { query } = require("../config/conn");
const { verifyLength, isNotEmpty } = require("../helpers/checkFields");
const addBook = async (req, res, next) => {
  const { isbn, title, noPages, author, synopsis, categoryID } = req.body;
  const { file } = req;
  const fields = [
    isbn,
    title,
    file.filename,
    parseInt(noPages),
    author,
    synopsis,
    parseInt(categoryID),
  ];
  // if (!fields.every(isNotEmpty)) {
  // return res.json({ success: false, msg: "Empty fields" });
  // }
  // if (!fields.every(verifyLength)) return res.json({ success: false });

  try {
    const sql =
      "INSERT INTO book (isbn,title,filename,no_pages,author,synopsis,category_id) VALUES (?,?,?,?,?,?,?)";
    query(sql, fields);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addBook };
