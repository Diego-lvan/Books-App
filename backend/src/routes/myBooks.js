const myBooksRouter = require("express").Router();
const { addMyBook } = require("../controllers/myBooks");
//add to my books list
myBooksRouter.post("/my-books", addMyBook);

//get current list
myBooksRouter.get("/my-books/:isbn/:userID");

module.exports = myBooksRouter;
