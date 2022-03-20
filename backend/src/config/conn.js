const mysql = require("mysql");
const { dbPwd, dbUser, dbHost, dbName } = require("./config.js");
const util = require("util");
const conn = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPwd,
  database: dbName,
});

const query = util.promisify(conn.query).bind(conn);

module.exports = { conn, query };
