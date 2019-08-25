var Transactions = require("../models/band");

module.exports = {
  new: newTransaction,
  create,
  index,
  show
};

function newTransaction(req, res) {
  res.render("band/new", { title: "Add Transaction" });
}

function show(req, res) {}
