//creamos el controlador de empleado para validar lo que se guarda en la db

const empleadosModel = require("../models/empleados.model");
const Empleado = require("../models/empleados.model");
let response = {
    msg: "",
    exito: false
}

//metodo para crear usuarios en la DB
exports.create = function (req, res) {
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
        cargo: req.body.cargo,
        //fecha: req.body.fecha_nacimiento
    })
    //string para generar error o no al guardar datos
    empleado.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se guardo correctamente"
        res.json(response)
    })
}

//metodo para buscar empleados
exports.find = function(req, res) {
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

//metodo de busqueda de empleado por ID
exports.findOne = function(req, res){
    Empleado.findOne({_id: req.params.id}, function(err, empleado){
        res.json(empleado)
    })
}

//metodo para agregar el update a la DB
exports.update = function(req, res) {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email
    }
    Empleado.findByIdAndUpdate(req.params.id, {$set: empleado}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error modificando datos de usuario"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se modificó correctamente"
        res.json(response)
    })
}

//metodo para eliminar datos de empleado
exports.remove = function(req, res) {
    Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error eliminando el usuario"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se elimino correctamente"
        res.json(response)
    })
}