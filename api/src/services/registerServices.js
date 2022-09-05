const bcrypt = require('bcrypt')
const { User, Authentication, Token } = require("../database/index");
const { Op } = require("sequelize");
const {confirmEmail} = require("../utils/sendEmail.js")
const genConfirmationToken = require("../utils/genConfirmationToken")

const createNewUser = async (req,res,body) => {
    const {email, password, dateBirth, first_name, last_name, phone, banned, access_level} = body;
    if(!email || !password || !dateBirth || !first_name || !last_name || !phone) {
        return res.status(400).json({message:"Please add all fields"})
    }
    let user = await User.findOne({ where: {email: email} })
    if (user) return res.status(400).json({message:'User already exists'})
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    await Authentication.create({email: email, password: hashedPassword})
    const registerUser = await User.create({ email: email, dateBirth, first_name, last_name, phone, banned, access_level})

    let jwt_token = genConfirmationToken(email)
    await User.update({token: jwt_token}, { where: {email: email} })
    confirmEmail(email, jwt_token)

    return registerUser
};

module.exports = {
    createNewUser,
  };
