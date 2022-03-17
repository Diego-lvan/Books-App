const inputsLength = require("./inputsLength");
const verifyLength = (inputs) => {
  return !inputs.some((input) => {
    const key = Object.keys(input)[0];
    const maxLength = inputsLength[key]?.maxLength;
    const minLength = inputsLength[key]?.minLength;
    if (input[key]?.length > maxLength || input[key]?.length < minLength) {
      return true;
    }
    return false;
  });
};

// const inputs = [
//   {
//     isbn: "123456789012",
//   },
//   {
//     title: "23",
//   },
// ];

// console.log(verifyLength(inputs));

module.exports = verifyLength;
