// import mongoose from "mongoose";

// export const Movie = mongoose.model("Movie", {
//   title: String,
//   rating: Number,
//   year: Number,
// });

const {model, Schema} = require("mongoose");

const Movie = new Schema({
  title: String,
  rating: Number,
  year: Number,
});
module.exports = model('Movie', Movie);