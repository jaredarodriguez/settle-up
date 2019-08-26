var mongoose = require("mongoose");

var bandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  memberName: {
    type: String,
    reuired: true
  },
  email: String,
  avatar: {
    type: String,
    required: true
  },
  googleId: String
});

module.exports = mongoose.model("Band", bandSchema);
