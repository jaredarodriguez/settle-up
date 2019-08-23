var mongoose = require("mongoose");

var bandSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    band: String,
    avatar: String,
    googleId: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Band", bandSchema);
