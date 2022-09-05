const jwt = require("jsonwebtoken")

const genConfirmationToken = (id) => {
    const secretKey = process.env.JWT_SECRET_KEY
    const token = jwt.sign(
        { id }, secretKey,{expiresIn:"1d"}
    )
    return token
}

module.exports = genConfirmationToken