const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fs = require("fs");

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

// Fetch Users with similar sport interest
const fetchSimilarUsers = async (req, res) => {
  // res.json({ sport: sport, name: req.user.name });
  try {
    const sport = req.params.sport;
    const users = await User.find({ sports: sport });
    if (!users) {
      return res.json("No users found");
    }
    let finalUsers = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].pictureURL) {
        const profilepic = fs.readFileSync(`${users[i].pictureURL}`, {
          encoding: "utf8",
          flag: "r",
        });
        finalUsers.push({ ...users[i]._doc, picture: profilepic });
      }
    }
    console.log(finalUsers[0]);
    return res.json(finalUsers);
  } catch (err) {
    console.log("Wrong query", err);
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
  res.json("Success Sports Added: " + sport);
};

// Add Profile Picture
const addProfilePicture = async (req, res) => {
  try {
    const buffer = Buffer.from(req.body.base64);
    fs.writeFileSync(`profilePictures/${req.user.email}.txt`, buffer);
    const user = await User.findByIdAndUpdate(req.user._id, {
      pictureURL: `profilePictures/${req.user.email}.txt`,
    });
    res.json("saved");
  } catch (err) {
    res.json("Error: Image not saved !");
  }
};

// Remove user favorite sport
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
  res.json("Success Sports Removed: " + sport);
};

module.exports = {
  addSport,
  removeSport,
  login,
  register,
  fetchSimilarUsers,
  addProfilePicture,
};
