const inputsLength = {
  isbn: { maxLength: 13, minLength: 10 },
  title: { maxLength: 50, minLength: 1 },
  noPages: { maxLength: 10000, minLength: 1 },
  filename: { maxLength: 70, minLength: 1 },
  synopsis: { maxLength: 600, minLength: 1 },
  email: { maxLength: 50, minLength: 5 },
  user: { maxLength: 20, minLength: 1 },
  userImg: { maxLength: 80, minLength: 1 },
  comment: { maxLength: 700, minLength: 1 },
  reply: { maxLength: 700, minLength: 1 },
};

module.exports = inputsLength;
