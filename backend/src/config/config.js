require("dotenv").config();
const config = {
  dbPwd: process.env.DB_PWD,
  dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
};

module.exports = config;
