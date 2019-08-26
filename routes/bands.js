var express = require("express");
var router = express.Router();
var express = require("express");
var Band = require("../controllers/bands");
var transactionsCtrl = require("../controllers/transactions");
/* GET users listing. */

router.get("/", Band.index);
router.post("/", Band.index);
router.get("/bands/:id", transactionsCtrl.show);

module.exports = router;
