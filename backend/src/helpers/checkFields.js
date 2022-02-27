const isNotEmpty = (field) => (field ? true : false);

const verifyLength = ({ field, maxLength }) => field.length <= maxLength;

module.exports = { isNotEmpty, verifyLength };
