const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    admin: {
      type: Number,
      required: true,
    },
    sports: {
      type: [String],
    },
    location: {
      type: [Number],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
