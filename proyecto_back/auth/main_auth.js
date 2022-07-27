//Definimos el metodo de autenticacion para el usuario con permisos y generar el token de acceso
//const { request } = require("express")
const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "_recret_")
        request.usuario = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({code: 4, msg:"No tiene permisos de acceso"})
    }
}

module.exports = auth