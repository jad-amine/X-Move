const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

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
      friends: user.friends,
    },
    process.env.TOKEN_SECRET
  );
  console.log(user, "logged in");
  res.status(200).json({
    token: token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      type: user.admin,
      sports: user.sports,
      friends: user.friends,
    },
  });
};

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

// Add user favorite sport
const addSport = async (req, res) => {
  if (!req.body.sport) {
    return res.status(401).json({ message: "Please select a sport" });
  }
  const sport = req.body.sport;
  console.log(req.user._id);
  if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
    return res.status(404).json({ error: "Not a user" });
  }
  const user = await User.findByIdAndUpdate(req.user._id, {
    $push: { sports: sport },
  });
  console.log(req.user.name);
  res.json(user);
};

// Remove use favorite sport
const removeSport = async (req, res) => {
  if (!req.body.sport) {
    return res.status(401).json({ message: "Please select a sport" });
  }
  const sport = req.body.sport;
  console.log(req.user._id);
  if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
    return res.status(404).json({ error: "Not a user" });
  }
  const user = await User.findByIdAndUpdate(req.user._id, {
    $pull: { sports: sport },
  });
  console.log(req.user.name);
  res.json(user);
};

module.exports = { addSport, removeSport, login, register };
