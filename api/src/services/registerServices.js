const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const { Op } = require("sequelize");

const createNewUser = async (body) => {
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

    return registerUser
};

module.exports = {
    createNewUser,
  };
