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
  sports: {
    type: [String],
  },
  location: {
    type: [Number],
  },
});

module.exports = mongoose.model("Field", fieldSchema);
