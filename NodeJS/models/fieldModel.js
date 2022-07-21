const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  property: {
    type: String,
    required: true,
  },
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
    unique: true,
  },
  rentPerHour: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  reservations: {
    type: [Object],
  },
});

module.exports = mongoose.model("Field", fieldSchema);
