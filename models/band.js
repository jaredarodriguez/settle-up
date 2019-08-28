var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bandSchema = new Schema({
  title: { type: String },
  memberName: { type: String }
  // email: { type: String, required: true },
  // avatar: { type: String },
  // googlId: { type: String }
});
module.exports = mongoose.model("Band", bandSchema);
