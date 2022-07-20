const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true,
  },
  pictureURL: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  location: {
    type: [Number],
  },
  number: {
    type: Number,
  },
  rentPerHour: {
    type: Number,
  },
});

module.exports = mongoose.model("Field", fieldSchema);
