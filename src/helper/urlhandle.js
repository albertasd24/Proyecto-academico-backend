export const responseRequestBad = (res, code = 400, error = "") => {
    res.status(code).json({
        code,
        error: error
    })
}