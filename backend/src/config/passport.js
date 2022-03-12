const passport = require("passport");
const { query } = require("./conn");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local");

const customFields = {
  passwordField: "pwd",
  usernameField: "email",
};

const verify = async (emailAdress, password, done) => {
  try {
    const user = await query("SELECT * FROM user WHERE email = ?", [emailAdress]);
    if (user.length == 0) return done(null, false);
    const hashedPassword = user[0].password;
    if (!bcrypt.compare(password, hashedPassword)) return done(null, false);
    const { email, user_id, is_admin, user_img } = user[0];
    const userName = user[0].username;
    done(null, {
      email,
      userID: user_id,
      isAdmin: is_admin,
      username: userName,
      img: user_img,
    });
  } catch (error) {}
};

const strategy = new LocalStrategy(customFields, verify);
passport.use(strategy);

passport.serializeUser((user, done) => {
  //saves user in session.passport.user
  done(null, user);
});

passport.deserializeUser(async (userData, done) => {
  // grabs the email from session.passport.user and adds it to req.user
  const sql = "SELECT * FROM user WHERE user_id=? ";
  const user = await query(sql, [userData.userID]);
  const { email, user_id, is_admin, username, user_img } = user[0];
  done(null, { email, userID: user_id, isAdmin: is_admin, username, img: user_img });
});
