const jwt = require("jsonwebtoken")

const genAuthToken = (id) => {
    const secretKey = process.env.JWT_SECRET_KEY
    const token = jwt.sign(
        { id }, secretKey,{expiresIn:"30d"}
    )
    return token
}

module.exports = genAuthToken