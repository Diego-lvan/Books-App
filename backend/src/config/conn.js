const mysql = require("mysql");
const { dbPwd, dbUser } = require("./config.js");
const util = require("util");
const conn = mysql.createPool({
  host: `127.0.0.1`,
  user: dbUser,
  password: dbPwd,
  database: "uniread",
});

const query = util.promisify(conn.query).bind(conn);

module.exports = { conn, query };
