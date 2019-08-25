var express = require("express");
var router = express.Router();
var express = require("express");
var Band = require("../controllers/bands");
/* GET users listing. */

router.get("/", Band.index);
router.post("/", Band.index);
module.exports = router;
