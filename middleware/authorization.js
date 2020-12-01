const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const access_token = req.cookies.jwt
    if(!access_token) {
        return res.redirect('/login')
    }
    next()
}
