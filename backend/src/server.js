require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const path = require("path");
const { conn } = require("./config/conn");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const passport = require("passport");
const sessionStore = new MySQLStore({}, conn);
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const config = { extensions: ["png", "jpg", "svg", "jpeg"] };
app.use(express.static(path.join(__dirname, "public"), config));

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(userRouter);
app.use(authRouter);
app.use(categoryRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening in port ${process.env.PORT || 5000}`);
});
