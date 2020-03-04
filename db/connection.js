const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/list", { useNewUrlParser: true });
module.exports = mongoose;
