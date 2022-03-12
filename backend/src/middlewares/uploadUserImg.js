const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, "src/public/users");
  },
  filename: (req, file, done) => {
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
