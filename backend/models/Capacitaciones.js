const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let capacitacionSchema = new Schema(
  {
    idUsuario: {
      type: Number,
    },
    nombresUsuario: {
      type: String,
    },
    apellidosUsuario: {
      type: String,
    },
    capacitacion: {
      type: String,
    },
    duracionCapacitacion: {
      type: String,
    },
    fechaCapacitacion: {
      type: String,
    },
  },
  {
    collection: "capacitaciones",
  }
);

module.exports = mongoose.model("capacitaciones", capacitacionSchema);