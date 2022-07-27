const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario:{type: String, required: true, max: 50},
    pass:{type: String, required: true, max: 50}
})

module.exports = mongoose.model("usuarios", usuarioSchema)