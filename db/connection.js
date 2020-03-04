const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/entities", { useNewUrlParser: true });
module.exports = mongoose;
