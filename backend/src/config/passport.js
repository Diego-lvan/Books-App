const passport = require("passport");
const { query } = require("./conn");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");

const customFields = {
  passwordField: "pwd",
  usernameField: "email",
};

const verify = async (username, password, done) => {
  try {
    const user = await query("SELECT * FROM user WHERE email = ?", [username]);
    if (user.length == 0) return done(null, false);
    const hashedPassword = user[0].password;
    if (!bcrypt.compare(password, hashedPassword)) return done(null, false);
    const { email, user_id, is_admin } = user[0];
    done(null, { email, userID: user_id, isAdmin: is_admin });
  } catch (error) {}
};

const strategy = new LocalStrategy(customFields, verify);
passport.use(strategy);

passport.serializeUser((user, done) => {
  //saves user in session.passport.user
  done(null, user);
});

passport.deserializeUser(async (username, done) => {
  // grabs the email from session.passport.user and adds it to req.user
  const sql = "SELECT * FROM user WHERE user_id=? ";
  const user = await query(sql, [username.userID]);
  const { email, user_id, is_admin } = user[0];
  done(null, { email, userID: user_id, isAdmin: is_admin });
});
