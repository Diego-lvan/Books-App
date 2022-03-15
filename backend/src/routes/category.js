const categoryRouter = require("express").Router();
const { addCategory, getCategories } = require("../controllers/category");
const isAdmin = require("../middlewares/isAdmin");
const isLogged = require("../middlewares/isLogged");
// add new category
categoryRouter.post("/category", [isAdmin, addCategory]);

// get all  categories
categoryRouter.get("/category", isLogged, getCategories);

//update category

module.exports = categoryRouter;
