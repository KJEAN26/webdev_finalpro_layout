const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const access_token = req.cookie.jwt
    if(!access_token) {
        return res.redirect('/login')
    }
    next()
}
