const { query } = require("../config/conn");

const getStatus = async (req, res) => {
  const status = await query("SELECT * FROM status");
  res.json({ success: true, status });
};

module.exports = { getStatus };
