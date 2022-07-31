const User = require("../models/userModel");
const Field = require("../models/fieldModel");
const Post = require("../models/postModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fs = require("fs");

// Login User
const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
    .populate({ path: "friends", populate: { path: "posts" } })
    .populate("pendingFriendRequests")
    .populate("friendRequests")
    .populate("posts");
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
      pictureURL: user.pictureURL,
    },
    process.env.TOKEN_SECRET
  );
  console.log(user.name, "logged in");

  res.status(200).json({
    token: token,
    user: user,
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
    return res.json(users);
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
  if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
    return res.status(404).json({ error: "Not a user" });
  }
  await User.findByIdAndUpdate(req.user._id, {
    $push: { sports: sport },
  });
  console.log(req.user.name);
  res.json("Success Sports Added: " + sport);
};

// Add Profile Picture
const addProfilePicture = async (req, res) => {
  try {
    require("fs").writeFileSync(
      `public/Images/ProfilePictures/${req.user.email}.png`,
      req.body.base64,
      "base64",
      function (err) {
        console.log(err);
      }
    );
    await User.findByIdAndUpdate(req.user._id, {
      pictureURL: `/Images/ProfilePictures/${req.user.email}.png`,
    });
    res.json("saved");
  } catch (err) {
    console.log("error");
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
  await User.findByIdAndUpdate(req.user._id, {
    $pull: { sports: sport },
  });
  console.log(req.user.name);
  res.json("Success Sports Removed: " + sport);
};

// Get Fields Information
const getReservations = async (req, res) => {
  const field = req.params.field;
  try {
    const fields = await Field.find({ sport: field });
    res.status(200).json(fields);
  } catch (error) {
    res.status(400).json("Bad Request !!!");
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    if (req.body.location) {
      await User.findByIdAndUpdate(req.user._id, {
        about: req.body.about,
        location: req.body.location,
      });
    } else {
      await User.findByIdAndUpdate(req.user._id, {
        about: req.body.about,
      });
    }
    res.status(200).json("Updated");
  } catch (error) {
    console.log(error);
  }
};

// Get Locations
const getLocations = async (req, res) => {
  const type = req.params.type;
  const sport = req.params.sport;
  try {
    if (type === "players") {
      if (sport === "allPlayers") {
        const players = await User.find();
        if (!players) {
          return res.json("No players found");
        }
        return res.json(players);
      } else {
        const players = await User.find({ sports: sport });
        if (!players) {
          return res.json("No players found");
        }
        return res.json(players);
      }
    } else {
      const fields = await Field.find({ sport: sport });
      if (!fields) {
        return res.json("No fields found");
      }
      return res.json(fields);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error !");
  }
};

// Add/Remove Friend
const addFriend = async (req, res) => {
  const sender = req.user._id;
  const receiver = req.body.id;
  const isFriend = req.body.isFriend;
  try {
    if (isFriend) {
      const updatedUser = await User.findByIdAndUpdate(sender, {
        $pull: { friends: receiver },
      });
      await User.findByIdAndUpdate(receiver, {
        $pull: { friends: sender },
      });
      console.log("Removed");
      return res.status(200).json("Removed");
    }
    // 1) First Check if the receiver has already added the sender
    const alreadyAdded = await User.findById(receiver).where({
      friendRequests: sender,
    });
    // 2) If true: Remove the requests and add friends
    if (alreadyAdded) {
      await User.findByIdAndUpdate(sender, {
        $pull: { pendingFriendRequests: receiver },
        $push: { friends: receiver },
      });
      const friend = await User.findByIdAndUpdate(receiver, {
        $pull: { friendRequests: sender },
        $push: { friends: sender },
      });
      res.status(200).json({ friend: friend, message: "Added" });
      // 3) If false
    } else {
      await User.findByIdAndUpdate(sender, {
        $push: { friendRequests: receiver },
      });
      const friend = await User.findByIdAndUpdate(receiver, {
        $push: { pendingFriendRequests: sender },
      });
      res
        .status(200)
        .json({ friend: friend, message: "Friend Request Sent !" });
    }
  } catch (error) {
    res.status(500).json("Couldn't add friend / Server error");
  }
};

// Add Post
const addPost = async (req, res) => {
  try {
    require("fs").writeFileSync(
      `public/Images/Posts/${req.body.id}.png`,
      req.body.picture,
      "base64",
      function (err) {
        console.log(err);
      }
    );
    const newPost = {
      ...req.body,
      picture: `/Images/Posts/${req.body.id}.png`,
      user: req.user._id,
    };
    const post = await Post.create(newPost);
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        posts: post._id,
      },
    });
    res.json({ message: "Saved", post: post });
  } catch (err) {
    console.log(err);
    res.json("Error: Image not saved !");
  }
};

// delete user.password   ##### as soon as possible // dont send pass

module.exports = {
  addSport,
  removeSport,
  login,
  register,
  fetchSimilarUsers,
  addProfilePicture,
  getReservations,
  updateProfile,
  getLocations,
  addFriend,
  addPost,
};
