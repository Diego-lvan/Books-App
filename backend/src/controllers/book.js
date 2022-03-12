const { query } = require("../config/conn");
const { verifyLength, isNotEmpty } = require("../helpers/checkFields");
const addBook = async (req, res, next) => {
  const { isbn, title, noPages, author, synopsis, categoryID } = req.body;
  if (!isbn || !title || !noPages || !author || !synopsis || !categoryID)
    return res.json({ success: false });
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

  try {
    const sql =
      "INSERT INTO book (isbn,title,filename,no_pages,author,synopsis,category_id) VALUES (?,?,?,?,?,?,?)";
    query(sql, fields);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const sql = `SELECT book.isbn, book.title, book.filename, book.author, category.category
                  FROM book 
                INNER JOIN category
                  ON category.category_id = book.category_id ORDER BY category.category ASC`;
    const books = await query(sql);
    res.json({ books, success: true });
  } catch (error) {
    console.log(error);
  }
};

const getByISBN = async (req, res, next) => {
  const { isbn } = req.params;
  if (!isbn) return res.json({ success: false });
  const sql = "SELECT * FROM book WHERE isbn = ?";
  const data = await query(sql, [isbn]);
  if (data.length == 0) return res.json({ success: false, msg: "Not found" });
  res.json({ book: data[0], success: true });
};

const getByStatus = async (req, res) => {
  const statusID = req.params.id;
  const { userID } = req.user;
  if (!statusID || !userID) return res.json({ success: true });
  const sql = `SELECT book.isbn, book.title, book.filename, book.author FROM book 
  INNER JOIN my_books ON my_books.isbn = book.isbn AND my_books.user_id = ? AND my_books.status_id = ?`;
  const books = await query(sql, [userID, statusID]);
  res.json({ books });
};

const updateBook = async (req, res) => {
  try {
    let { isbn, title, noPages, author, synopsis, categoryID } = req.body;
    if (!isbn || !title || !noPages || !author || !synopsis || !categoryID) {
      return res.json({ success: false });
    }
    const { file } = req;
    noPages = parseInt(noPages);
    categoryID = parseInt(categoryID);
    let fields, sql;
    if (!file) {
      fields = [title, noPages, author, categoryID, synopsis, isbn];
      sql =
        "UPDATE book SET title =?, no_pages =?,author =?,category_id =?, synopsis=? WHERE isbn = ?";
    }

    if (file) {
      fields = [title, noPages, author, categoryID, file.filename, synopsis, isbn];
      sql =
        "UPDATE book SET title =?, no_pages =?,author =?,category_id =?, filename =?, synopsis=? WHERE isbn = ?";
    }
    await query(sql, fields);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addBook, getAllBooks, getByISBN, getByStatus, updateBook };
