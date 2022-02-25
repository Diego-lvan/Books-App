require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const config = { extensions: ["png", "jpg", "svg", "jpeg"] };
app.use(express.static(path.join(__dirname, "public"), config));
app.use(userRouter);
app.get("/", (req, res) => {
  res.json({ Hello: "hola" });
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening in port ${process.env.PORT || 5000}`);
});
