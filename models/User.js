const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    dafault: Date.now
  }
});

module.exports = User = mongoose.model("user", UserScheme);
