const bookRouter = require("express").Router();
const {
  addBook,
  getAllBooks,
  getByISBN,
  getByStatus,
  updateBook,
} = require("../controllers/book");
const upload = require("../middlewares/uploadFile");
// post book

bookRouter.post("/book/add", upload.single("bookCover"), addBook);

//get all books
bookRouter.get("/books", getAllBooks);

//get by categorie
bookRouter.get("/book/category/:id", getByStatus);

// get by isbn
bookRouter.get("/book/:isbn", getByISBN);

//remove

//update
bookRouter.put("/book", upload.single("bookCover"), updateBook);

module.exports = bookRouter;
