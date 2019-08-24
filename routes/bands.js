var express = require("express");
var router = express.Router();
var Bands = require("../controllers/bands");
/* GET users listing. */
router.get("/", Bands.index);

module.exports = router;
