const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  en_name: String,
  desc: String,
  link: String,
  thumbnail: String,
  works: [String],
  slug: String
});

module.exports = mongoose.model("Entities", entitySchema);
