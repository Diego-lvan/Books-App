const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, done) => {
    console.log(file);
    done(null, "src/public/books");
  },
  filename: (req, file, done) => {
    console.log(file + "here");
    done(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, done) => {
  const mimetype = file.mimetype;
  if (mimetype.includes("jpg") || mimetype.includes("png") || mimetype.includes("jpeg")) {
    return done(null, true);
  }
  done(null, false);
};

let upload = multer({ storage, fileFilter });

module.exports = upload;
