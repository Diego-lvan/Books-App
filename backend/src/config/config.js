require("dotenv").config();
const config = {
  dbPort: process.env.PORT,
  dbPwd: process.env.DB_PWD,
  dbUser: process.env.DB_USER,
};

module.exports = config;
