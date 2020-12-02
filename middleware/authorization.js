const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const access_token = req.cookies.jwt
    // console.log(access_token);
    if(!access_token) {
        return res.q('/login')
    }
    try {
       req.user = jwt.verify(access_token,process.env.ACCESS_TOKEN) 
       next()
    } catch (error) {
        res.redirect('back')
    }
    
}
