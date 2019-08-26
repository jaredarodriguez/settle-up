var express = require("express");
var router = express.Router();
var express = require("express");
var bandsCtrl = require("../controllers/bands");
var transactionsCtrl = require("../controllers/transactions");
/* GET users listing. */

router.get("/", bandsCtrl.index);
// router.post("/", bandsCtrl.create);
router.get("/bands/transactions", transactionsCtrl.show);

module.exports = router;
