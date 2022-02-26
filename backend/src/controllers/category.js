const { query } = require("../config/conn");

const addCategory = async (req, res, next) => {
  const { category } = req.body;
  try {
    if (!category || category.length > 30) return res.json({ sucess: false });
    const sql = "INSERT INTO category (category) VALUES (?)";
    await query(sql, [category]);
    res.json({ sucess: true });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false });
  }
};

module.exports = { addCategory };
