const categoryRouter = require("express").Router();
const { addCategory, getCategories } = require("../controllers/category");
// add new category
categoryRouter.post("/category", /*Verify is an admin*/ [addCategory]);

// get all  categories
categoryRouter.get("/category", getCategories);
//update category

module.exports = categoryRouter;
