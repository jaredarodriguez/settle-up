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

function create(req, res) {
  Transactions.create(req.body);
  res.redirect(`/bands/${req.params.id}`);
  //take the 'owner' (i.e. name) of person making the transaction and the amount they're putting in//
}

function index(req, res) {}

function show(req, res) {}
