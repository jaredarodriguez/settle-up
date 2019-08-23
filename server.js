// Load express
const express = require("express");
const path = require("path");

// Create our express app
const app = express();

// configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Tomorrow, we'll use best practice routing
app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/home", function(req, res) {
  res.render("home", { cohort: "sei-cc-4" });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
  console.log("Listening on port 3000");
});
