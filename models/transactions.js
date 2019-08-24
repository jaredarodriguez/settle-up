var mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and model

const transaction = new Transcation({
  amount: Number,
  category: String,
  deposit: Boolean,
  withdrawal: Boolean
});

const transaction = mongoose.model("transaction", transaction);

module.exports = transaction;
