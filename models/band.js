var mongoose = require("mongoose");

var bandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  memberName: {
    type: String,
    required: true
  },
  email: String,
  avatar: {
    type: String
  },
  googleId: String
});

module.exports = mongoose.model("Band", bandSchema);
