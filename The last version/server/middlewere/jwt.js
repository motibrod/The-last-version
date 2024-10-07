const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_JWT


function createToken(_id) {
    const accessToken = jwt.sign({ _id }, "supersecret_dont_share", { expiresIn: "1h" })
    return accessToken
}


function validateToken(token) {
    return jwt.verify(token, secret)
}

module.exports = { createToken, validateToken };