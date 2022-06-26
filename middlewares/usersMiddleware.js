
const greet = (req, res, next) => {
  res.json("from middleware");
};

module.exports = { greet };
