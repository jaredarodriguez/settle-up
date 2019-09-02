const User = require("../models/user");

module.exports = {
  index,
  new: newBand,
  create,
  delete: deleteBand,
  show,
  createTransaction,
  deleteOne
};

function createTransaction(req, res) {
  User.findById(req.user.id, function(err, manager) {
    console.log(req.body);
    console.log(req.params);
    let band = manager.band.id(req.params.id);
    band.transaction.push(req.body);
    manager.save(function(err) {
      res.redirect(`/bands/${req.params.id}`);
    });
  });
}

function index(req, res, next) {
  User.findById(req.user.id).then(function(manager) {
    // Passing search values, name & sortKey, for use in the EJS
    res.render("bands/index", { title: "Band Roster", manager });
  });
}

function newBand(req, res) {
  res.render("bands/new", { title: "Add Band" });
}

function create(req, res) {
  User.findById(req.user.id, function(err, manager) {
    // console.log(manager);
    // console.log(req.body);
    manager.band.push(req.body);
    // console.log(manager);
    if (err) return res.redirect("/bands/new");
    manager.save(function(err) {
      res.redirect("/bands");
    });
  });
}

function deleteBand(req, res) {
  User.findById(req.user.id, function(err, manager) {
    manager.band.remove(req.params.id);
    manager.save(function() {
      res.redirect("/bands");
    });
  });
}

function show(req, res) {
  User.findById(req.user.id, function(err, manager) {
    let band = manager.band.id(req.params.id);
    res.render("bands/show", {
      title: "Log Sheet",
      manager,
      band
    });
  });
}

function deleteOne(req, res) {
  console.log(req.params);
  User.findById(req.user.id, function(err, manager) {
    let band = manager.band.id(req.params.band);
    console.log(band);
    // let transaction = band.id;
    band.transaction.remove(req.params.id);
    manager.save(function() {
      res.render("bands/show", {
        title: "Log Sheet",
        manager,
        band
      });
    });
  });
}
