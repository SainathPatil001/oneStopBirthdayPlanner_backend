const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  text: String,
  category: String,
});

module.exports = mongoose.model("BirthdayTexts", Schema);
