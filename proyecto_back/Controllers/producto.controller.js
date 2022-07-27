//creamos el controlador de empleado para validar lo que se guarda en la db

const productoModel = require("../models/producto.models");
const Producto = require("../models/producto.models");
let response = {
    msg: "",
    exito: false
}

//metodo para crear productos en la DB
exports.create = function (req, res) {
    let producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        color: req.body.color,
        modelo: req.body.modelo
    })
    //string para generar error o no al guardar datos
    producto.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se guardo correctamente"
        res.json(response)
    })
}

//metodo para buscar producto
exports.find = function(req, res) {
    Producto.find(function(err, producto){
        res.json(producto)
    })
}

//metodo de busqueda de producto por ID
exports.findOne = function(req, res){
    Producto.findOne({_id: req.params.id}, function(err, producto){
        res.json(producto)
    })
}

//metodo para agregar el update a la DB
exports.update = function(req, res) {
    let producto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        color: req.body.color,
        modelo: req.body.modelo
    }
    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error modificando datos de producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se modificó correctamente"
        res.json(response)
    })
}

//metodo para eliminar productos
exports.remove = function(req, res) {
    Producto.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error eliminando el producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se elimino correctamente"
        res.json(response)
    })
}