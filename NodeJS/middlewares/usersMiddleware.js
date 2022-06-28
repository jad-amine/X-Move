require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Register User
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = { ...req.body, password: hashPassword, admin: 0 };
    const user = await User.create(newUser);
    var token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      process.env.TOKEN_SECRET
    );
    console.log(user, "signed up");
    res.status(200).json(token);
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ error: err.message });
  }
};

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
  console.log(user, "logged in");
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

module.exports = { register, login, authUser };
