const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pictureURL: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      // required: true,
    },
    about: {
      type: String,
    },
    admin: {
      type: Number,
      required: true,
    },
    sports: {
      type: [String],
    },
    location: {
      type: Object,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Field",
    },
    friends: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    pendingFriendRequests: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    friendRequests: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    posts: {
      type: [Object],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
