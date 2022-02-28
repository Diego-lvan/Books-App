const bookRouter = require("express").Router();
const { addBook, getAllBooks, getByISBN } = require("../controllers/book");
const upload = require("../middlewares/uploadFile");

//post cover book
bookRouter.post("/book/add", upload.single("bookCover"), addBook);

//get all
bookRouter.get("/book", getAllBooks);

// get by isbn
bookRouter.get("/book/:isbn", getByISBN);

//remove

//get by categorie

//get by ISBN

//update

module.exports = bookRouter;
