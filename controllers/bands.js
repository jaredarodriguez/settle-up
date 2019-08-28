const Band = require("../models/band");

module.exports = {
  index,
  new: newBand,
  create,
  delete: deleteBand
};

function index(req, res, next) {
  Band.find({}).then(function(bands) {
    // Passing search values, name & sortKey, for use in the EJS
    res.render("bands/index", { title: "Band Roster", bands });
  });
}

function newBand(req, res) {
  res.render("bands/new", { title: "Add Band" });
}

function create(req, res) {
  console.log(req.body);
  var band = new Band(req.body);
  console.log(band);
  band.save(function(err) {
    if (err) return res.redirect("/bands/new");
    res.redirect("/bands");
  });
}

function deleteBand(req, res) {
  Band.findByIdAndRemove(req.params.id, (err, deleteBand) => {
    console.log("deleting now");
    res.redirect("/bands");
  });
}

// router.delete("/:id", (req, res) => {
//   console.log(req.params.id, " id in delete route");
//   Fruits.findByIdAndRemove(req.params.id, (err, deleteFruit) => {
//     res.redirect("/fruits");
//   });
// });
