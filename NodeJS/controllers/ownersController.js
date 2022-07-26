const User = require("../models/userModel");
const Field = require("../models/fieldModel");
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
  const user = await User.findOne({ email: req.body.email }).populate(
    "property"
  );
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
      property: user.property,
    },
    process.env.TOKEN_SECRET
  );
  // if (user.pictureURL) {
  //   const profilepic = fs.readFileSync(`${user.pictureURL}`, {
  //     encoding: "utf8",
  //     flag: "r",
  //   });
  //   res.status(200).json({
  //     token: token,
  //     user: {
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       type: user.admin,
  //       property: user.property,
  //       picture: profilepic,
  //     },
  //   });
  // } else {
  res.status(200).json({
    token: token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      type: user.admin,
      property: user.property,
    },
  });
  // }
};

// Add property information
const addProperty = async (req, res) => {
  const info = req.body;
  require("fs").writeFileSync(
    `public/Images/PropertyImages/${info.name}.png`,
    info.pictureURL,
    "base64",
    function (err) {
      console.log(err);
    }
  );
  const newField = {
    ...info,
    pictureURL: `Images/PropertyImages/${info.name}.png`,
    owner: req.user._id,
    email: req.user.email,
  };
  try {
    const field = await Field.create(newField);
    await User.findByIdAndUpdate(req.user._id, {
      property: field._id,
    });
    res.status(200).json(field);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Update Property Information
const updatePropertyInfo = async (req, res) => {
  try {
    await Field.findByIdAndUpdate(req.user.property._id, {
      number: req.body.number,
      location: req.body.location,
      rentPerHour: req.body.rentPerHour,
      pictureURL: req.body.pictureURL,
    });
    res.status(200).json("Updated");
  } catch (error) {
    console.log(error, error.message);
    res.status(500).json("Server Error");
  }
};

// Add Game
const addGame = async (req, res) => {
  if (!req.body.propertyID || !req.body.newEvent) {
    res.status(400).json("Invalid Request !!");
    return;
  }
  try {
    await Field.findByIdAndUpdate(req.body.propertyID, {
      $push: { reservations: req.body.newEvent },
    });
    res.status(200).json("Reservation Added !!");
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Failed to add Reservation !!");
  }
};

// Get Reservations
const getReservations = async (req, res) => {
  try {
    const reservations = await Field.findById(req.user.property._id).select(
      "reservations"
    );
    res.status(200).json(reservations);
  } catch (error) {
    res.json("Invalid");
  }
};

// Delete Reservation
const deleteReservation = async (req, res) => {
  try {
    await Field.findByIdAndUpdate(
      req.user.property._id,
      { $pull: { reservations: { id: req.params.id } } },
      { safe: true, multi: false }
    );
    res.status(200).json("Removed");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};

// Reschedule Reservation
const rescheduleReservation = async (req, res) => {
  try {
    await Field.findByIdAndUpdate(
      req.user.property._id,
      { $pull: { reservations: { id: req.params.id } } },
      { safe: true, multi: false }
    );
    await Field.findByIdAndUpdate(req.user.property._id, {
      $push: {
        reservations: {
          ...req.body.rescheduledEvent.event,
          start: req.body.rescheduledEvent.start,
          end: req.body.rescheduledEvent.end,
        },
      },
    });
    res.status(200).json("Reservation Rescheduled !!");
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  register,
  login,
  addProperty,
  addGame,
  getReservations,
  deleteReservation,
  rescheduleReservation,
  updatePropertyInfo,
};
