const passport = require("passport");
const { query } = require("./conn");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");
const verify = async (username, password, done) => {
  try {
    const user = await query("SELECT * FROM user WHERE email = ?", [username]);
    if (user.length == 0) return done(null, false);
    const hashedPassword = user[0].password;
    if (!bcrypt.compare(password, hashedPassword)) return done(null, false);
    done(null, user[0].email);
  } catch (error) {}
};

const strategy = new LocalStrategy(verify);
passport.use(strategy);

passport.serializeUser((user, done) => {
  //saves user in session.passport.user
  done(null, user);
});

passport.deserializeUser(async (username, done) => {
  // grabs the email from session.passport.user and adds it to req.user
  const sql = "SELECT * FROM user WHERE email=? ";
  const user = await query(sql, [username]);
  done(null, user[0].email);
});
