var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/settle-up", {
  useNewUrlParser: true,
  useCreateIndex: true
});
