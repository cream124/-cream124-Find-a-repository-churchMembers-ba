
const {model, Schema} = require("mongoose");


module.exports = model("day", {
  executionDay: String,
  date: String,
  services: [String],
  image: String,
  order: Number,
  state: String,
  eventId: String
});