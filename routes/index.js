var express = require("express");
var passport = require("passport");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Settle-Up" });
});

//Google OAuth login route

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/band",
    failureRedirect: "/band"
  })
);

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/band");
});

module.exports = router;
