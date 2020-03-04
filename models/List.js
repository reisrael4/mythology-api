const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  en_name: String,
  desc: String,
  link: String,
  thumbnail: String,
  works: [String],
  slug: String
});

module.exports = mongoose.model("List", listSchema, "items");
