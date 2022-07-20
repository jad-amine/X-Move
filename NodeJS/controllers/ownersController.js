const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fs = require("fs");

// Register Owner
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = { ...req.body, password: hashPassword, admin: 2 };
    const user = await User.create(newUser);
    var token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      process.env.TOKEN_SECRET
    );
    console.log(user, "signed up");
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
  } catch (err) {
    console.log(err.message);
    res
      .status(401)
      .json({ error: err.message, message: "User already exists !" });
  }
};

// Login Owner
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
  if (user.pictureURL) {
    const profilepic = fs.readFileSync(`${user.pictureURL}`, {
      encoding: "utf8",
      flag: "r",
    });
    res.status(200).json({
      token: token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        type: user.admin,
        sports: user.sports,
        friends: user.friends,
        picture: profilepic,
      },
    });
  } else {
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
  }
};

module.exports = { register, login };
