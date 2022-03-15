require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const bookRouter = require("./routes/book");
const statusRouter = require("./routes/status");
const myBooksRouter = require("./routes/myBooks");
const commentsRouter = require("./routes/comments");
const replyRouter = require("./routes/reply");

const path = require("path");
const { conn } = require("./config/conn");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const passport = require("passport");
const sessionStore = new MySQLStore({}, conn);
const cors = require("cors");

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: false,
    secure: true,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-Width, Content-Type, Accept"
//   );
//   next();
// });

const config = { extensions: ["png", "jpg", "svg", "jpeg"] };
app.use(express.static(path.join(__dirname, "public"), config));

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(userRouter);
app.use(authRouter);
app.use(categoryRouter);
app.use(bookRouter);
app.use(statusRouter);
app.use(myBooksRouter);
app.use(commentsRouter);
app.use(replyRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening in port ${process.env.PORT || 5000}`);
});
