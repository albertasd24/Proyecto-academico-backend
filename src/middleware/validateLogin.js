import { responseRequestBad } from "../helper/urlhandle.js"

export const validateLogin = (req, res, next) => {
    let errors = []
    if (req.body.email == undefined || req.body.email == null || req.body.email == "") {
        errors.push("Email is not value");
    }
    if (req.body.password == undefined || req.body.password == null || req.body.password == "") {
        errors.push("Password is not value");
    }
    if (errors.length > 0) {
        return responseRequestBad(res, 400, errors)
    }
    next()
}