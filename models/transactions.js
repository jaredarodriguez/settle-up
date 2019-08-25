const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and model

const transactionSchema = new Transaction({
  amount: { type: Number },
  category: {
    enum: ["Gas", "Food", "Tolls", "Gear", "Candy", "Hotels"],
    required: true,
    type: String
  },
  timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);
