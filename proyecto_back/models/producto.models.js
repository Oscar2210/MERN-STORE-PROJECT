const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    codigo:{type: Number, require: true},
    nombre:{type: String, requiere: true, max:20},
    tipo:{type: String, requiere: true, max: 20},
    color:{type: String, require: true, max: 20},
    modelo:{type: String, require: true, max: 20}    
});

module.exports = mongoose.model("producto", ProductoSchema);