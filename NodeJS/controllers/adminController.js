const mongoose = require("mongoose");
const User = require("../models/userModel");
const Field = require("../models/fieldModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// Admin Login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !req.body.password || user.admin != 1) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    var token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        type: user.admin,
      },
      process.env.TOKEN_SECRET
    );
    res.status(200).json({
      token: token,
      user: {
        _id: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// Get all properties
const getProperties = async (req, res) => {
  const fields = await Field.find().populate("owner");
  res.status(200).json(fields);
};

module.exports = { getAllUsers, login, getProperties };
