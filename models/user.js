var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transaction: String,
  price: Number
});

var bandSchema = new Schema({
  title: String,
  memberName: { type: String },
  transaction: [transactionSchema]
});

var userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  band: [bandSchema]
});

module.exports = mongoose.model("User", userSchema);
