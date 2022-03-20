const statusRouter = require("express").Router();
const { getStatus } = require("../controllers/status");
const isLogged = require("../middlewares/isLogged");

//get status of books
statusRouter.get("/status", getStatus);

module.exports = statusRouter;
