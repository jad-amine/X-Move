const User = require("../models/userModel");
const mongoose = require("mongoose");

// Get all users
const getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
};

module.exports = { getAllUsers };
