const myBooksRouter = require("express").Router();
const { addMyBook } = require("../controllers/myBooks");
myBooksRouter.post("/my-books", addMyBook);

module.exports = myBooksRouter;
