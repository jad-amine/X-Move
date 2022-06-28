const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  sport: {
    type: [String],
  },
  location: {
    type: [Number],
  }
});

module.exports = mongoose.model('User', userSchema)