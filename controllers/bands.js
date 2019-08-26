const Band = require("../models/band");

module.exports = {
  index,
  new: newBand,
  create
};

function index(req, res, next) {
  Band.find({}).then(function(bands) {
    console.log(req.user);
    // Passing search values, name & sortKey, for use in the EJS
    res.render("bands/index", { user: req.user, title: "Band Roster", bands });
  });
}

function newBand(req, res) {
  res.render("bands/new", { title: "Add Band" });
}

function create(req, res) {
  console.log(req.body);
  var band = new Band(req.body);
  console.log(band);
  band.save(function() {
    // if (err) return res.redirect("/bands/new");
    res.redirect("/bands");
  });
}
