// import mongoose from "mongoose";
const {model, Schema} = require("mongoose");

module.exports = model("person", {
  name: String,
  lastName: String,
  motherLastName: String,
  birthDate: String,
  ci: String,
  photo: String,
  phone: String,
  address: String,
  location: String,
  state: String,
  email: String,
  registerId : String,
  registerName: String,
  registerDate: String,
  approvalId: String,
  approvalDate: String,
  user: Boolean,
  level: Number,
  userName: String,
  password: String,
  christian: Boolean,
  baptized: Boolean
});