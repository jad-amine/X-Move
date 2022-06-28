require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Login User
const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  var token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    process.env.TOKEN_SECRET
  );
  res.status(200).json(token);
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
