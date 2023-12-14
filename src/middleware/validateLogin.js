import { responseRequestBad } from "../helper/urlhandle.js"

export const validateLogin = (req, res, next) => {
    let errors = []
    if (req.body.email == null) {
        return responseRequestBad(res, 400, "El correo no puede estar vacío")
    }
    if (req.body.email == undefined || req.body.email == "") {
        errors.push("El correo no es valido");
    }
    if (req.body.password == undefined || req.body.password == null || req.body.password == "") {
        errors.push("\nLa contraseña no es valida");
    }
    if (errors.length > 0) {
        return responseRequestBad(res, 400, errors)
    }
    next()
}