const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  caption: {
    type: String,
    required: true,
  },
  comments: {
    type: [String],
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  picture: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  playerPic: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
