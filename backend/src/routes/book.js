const bookRouter = require("express").Router();
const isLogged = require("../middlewares/isLogged");
const isAdmin = require("../middlewares/isAdmin");
const {
  addBook,
  getAllBooks,
  getByISBN,
  getByStatus,
  updateBook,
  getAverageScore,
} = require("../controllers/book");
const upload = require("../middlewares/uploadFile");
// post book

bookRouter.post("/book/add", isAdmin, upload.single("bookCover"), addBook);

//get all books
bookRouter.get("/books", isLogged, getAllBooks);

//get by categorie
bookRouter.get("/book/category/:id", isLogged, getByStatus);

// get by isbn
bookRouter.get("/book/:isbn", isLogged, getByISBN);

//remove

//update
bookRouter.put("/book", isAdmin, upload.single("bookCover"), updateBook);

//get average score
bookRouter.get("/book/score/:isbn", isLogged, getAverageScore);

module.exports = bookRouter;
