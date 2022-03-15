const myBooksRouter = require("express").Router();
const isLogged = require("../middlewares/isLogged");
const {
  addMyBook,
  getMyBooks,
  deleteMyBook,
  rateBook,
  getScore,
} = require("../controllers/myBooks");
//add to my books list
myBooksRouter.post("/my-books", isLogged, addMyBook);

//get current list
myBooksRouter.get("/my-books/:isbn", isLogged, getMyBooks);

//remove from my books list
myBooksRouter.delete("/my-books/:isbn", isLogged, deleteMyBook);

//rate book
myBooksRouter.post("/my-books/rate", isLogged, rateBook);

//get score
myBooksRouter.get("/my-books/score/:isbn", isLogged, getScore);

module.exports = myBooksRouter;
