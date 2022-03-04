const statusRouter = require("express").Router();
const { getStatus } = require("../controllers/status");
statusRouter.get("/status", [getStatus]);

module.exports = statusRouter;
