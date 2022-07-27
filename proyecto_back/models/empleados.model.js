//Creacion del modelo con los datos que llegaran a la db
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombre:{type: String, required: true, max:20},
    apellido_p:{type: String, required: true, max:20},
    apellido_m:{type: String, required: false, max:20},
    telefono:{type: String, requiered: true, max:15},
    mail:{type: String, required: true, max:15},
    direccion:{type: String, required: false, max:15},
    cargo:{type: String, required: true, max:30},
    //fecha_nacimiento: {type: Date, required: false, max:10}
});

module.exports = mongoose.model("empleados", EmpleadosSchema);