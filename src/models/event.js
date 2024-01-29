// import mongoose from "mongoose";
const {model, Schema} = require("mongoose");

module.exports = model("event", {
  title: String,
  type: String,
  image: String,
  days: [String],
  order: Number,
  state: String
});