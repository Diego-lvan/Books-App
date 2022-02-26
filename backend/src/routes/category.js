const categoryRouter = require("express").Router();
const { addCategory } = require("../controllers/category");
// add new category
categoryRouter.post("/category/add", /*Verify is an admin*/ [addCategory]);

// get all categories

//update category

module.exports = categoryRouter;
