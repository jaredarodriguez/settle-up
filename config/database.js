var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.connect("mongodb://localhost/settle-up", {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = mongoose;
