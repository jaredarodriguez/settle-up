const User = require("../models/user");

module.exports = {
  api
};

function api(req, res) {
  User.findById(req.user.id, function(err, manager) {
    let band = manager.band.id(req.params.id);
    let transactions = band.transaction;
    // console.log(transactions);
    res.status(200).json(transactions);
  });
}
