const bookRouter = require("express").Router();
const { addBook } = require("../controllers/book");
const upload = require("../middlewares/uploadFile");

//post cover book
bookRouter.post("/book/add", upload.single("bookCover"), addBook);

//remove

//get by categorie

//get by ISBN

//get all

//update

module.exports = bookRouter;
