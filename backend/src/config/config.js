require("dotenv").config();
const config = {
  dbPwd: process.env.DB_PWD,
  dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = config;
