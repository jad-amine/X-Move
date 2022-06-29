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
const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !req.body.password) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  var token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      type: user.admin,
      sports: user.sports,
    },
    process.env.TOKEN_SECRET
  );
  console.log(user, "logged in");
  res.status(200).json(token);
};

// Auth User
const authUser = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthenticated user" });
  }
  token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      res.status(401).json({ err });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = { register, login, authUser };
