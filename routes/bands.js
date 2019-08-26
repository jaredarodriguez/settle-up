var express = require("express");
var router = express.Router();
var express = require("express");
var bandsCtrl = require("../controllers/bands");
/* GET users listing. */

router.get("/", bandsCtrl.index);
router.get("/new", bandsCtrl.new);
router.post("/new", bandsCtrl.create);

module.exports = router;
