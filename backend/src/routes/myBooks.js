const myBooksRouter = require("express").Router();
const { addMyBook, getMyBooks, deleteMyBook } = require("../controllers/myBooks");
//add to my books list
myBooksRouter.post("/my-books", addMyBook);

//get current list
myBooksRouter.get("/my-books/:isbn", getMyBooks);

//remove from my books list
myBooksRouter.delete("/my-books/:isbn", deleteMyBook);

module.exports = myBooksRouter;
