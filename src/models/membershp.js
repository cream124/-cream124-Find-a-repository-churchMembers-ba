const { model, Schema } = require("mongoose");

module.exports = model("membership", {
  idPerson: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  description: String,
  updateDate: String,
  idRegister: String,
  state: String,
});