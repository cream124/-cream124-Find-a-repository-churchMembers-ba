// import mongoose from "mongoose";
const {model, Schema} = require("mongoose");

module.exports = model("service", {
  name: String,
  subtitle: String,
  time: String,
  description2: String,
  photo: String,
  order: Number,
  state: String,
  dayId: String
});