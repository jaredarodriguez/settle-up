var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    transaction: String,
    category: {
      enum: ["Gas", "Food", "Tolls", "Gear", "Candy", "Hotels"],
      // required: true,
      price: Number
    },
    owner: { type: String }
  },
  {
    timestamps: true
  }
);

var bandSchema = new Schema({
  title: { type: String },
  memberName: { type: String },
  transaction: [transactionSchema]
});
module.exports = mongoose.model("Band", bandSchema);
