var jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const login = (req, res, next) => {
  // Add bcrypt
  console.log(req.body);
  var token = jwt.sign(req.body, process.env.TOKEN_SECRET);
  res.json(token);
};

const authUser = (req, res, next) => {
  token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) res.json({ err });
    console.log(decoded);
    res.json(decoded);
    // check what to do next
  });
};

module.exports = { login, authUser };
