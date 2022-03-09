const myBooksRouter = require("express").Router();
const { addMyBook, getMyBooks } = require("../controllers/myBooks");
//add to my books list
myBooksRouter.post("/my-books", addMyBook);

//get current list
myBooksRouter.get("/my-books/:isbn", getMyBooks);

module.exports = myBooksRouter;
