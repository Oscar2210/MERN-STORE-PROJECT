//creamos el router para el controlador de empleados

const express = require("express");
const router = express.Router();
const empleadosController = require("../Controllers/empleados.controller")

//metodos de create, insert, update, delete
router.post("/", empleadosController.create)
router.get("/", empleadosController.find)
router.get("/:id", empleadosController.findOne)
router.put("/:id", empleadosController.update)
router.delete("/:id", empleadosController.remove)

module.exports = router