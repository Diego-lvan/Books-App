require("dotenv").config();
const config = {
  dbPwd: process.env.DB_PWD,
  dbUser: process.env.DB_USER,
};

module.exports = config;
