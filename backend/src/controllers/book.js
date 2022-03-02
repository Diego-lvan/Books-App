const { query } = require("../config/conn");
const { verifyLength, isNotEmpty } = require("../helpers/checkFields");
const addBook = async (req, res, next) => {
  console.log(req.body);
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

const getAllBooks = async (req, res, next) => {
  const categories = await query("SELECT * FROM category");
  let allBooks = {};
  let count = 0;
  for (const category of categories) {
    const categoryID = category.category_id;
    const sql = `select book.isbn, book.title, book.author, book.filename, category.category 
                   from book 
              inner join category on category.category_id = book.category_id && book.category_id = ?`;
    let books = await query(sql, [categoryID]);
    allBooks[category.category] = books;
  }
  res.json({ books: allBooks, success: true });
};

const getByISBN = async (req, res, next) => {
  const { isbn } = req.params;
  const sql = "SELECT * FROM book WHERE isbn = ?";
  const data = await query(sql, [isbn]);
  if (data.length == 0) return res.json({ success: false, msg: "Not found" });
  res.json({ book: data, success: true });
};

module.exports = { addBook, getAllBooks, getByISBN };
