const myBooksRouter = require("express").Router();
const {
  addMyBook,
  getMyBooks,
  deleteMyBook,
  rateBook,
  getScore,
} = require("../controllers/myBooks");
//add to my books list
myBooksRouter.post("/my-books", addMyBook);

//get current list
myBooksRouter.get("/my-books/:isbn", getMyBooks);

//remove from my books list
myBooksRouter.delete("/my-books/:isbn", deleteMyBook);

//rate book
myBooksRouter.post("/my-books/rate", rateBook);

//get score
myBooksRouter.get("/my-books/score/:isbn", getScore);

module.exports = myBooksRouter;
