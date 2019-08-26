const Band = require("../models/band");

module.exports = {
  index,
  new: newBand,
  create
};

function index(req, res, next) {
  console.log(req.query);
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  Band.find(modelQuery)
    .sort(sortKey)
    .exec(function(err, bands) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render("bands/index", {
        bands,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
}

function newBand(req, res) {
  res.render("bands/new", { title: "Add Band" });
}

function create(req, res) {
  var band = new Band(req.body);
  console.log(band);
  band.save(function(err) {
    if (err) return res.redirect("/bands/new");
    res.redirect("/bands");
  });
}
