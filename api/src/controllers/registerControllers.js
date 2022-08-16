const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')
// const registerServices = require("../services/registerervices");

const registerUser = async (req, res, next) => {
  const {email, password, dateBirth, first_name, last_name, phone, banned, access_level} = req.body;
  try {
    if(!email || !password || !dateBirth || !first_name || !last_name || !phone) {
      return res.status(400).json({message:"Please add all fields"})
    }
    let user = await User.findOne({ where: {email: email} })
    if (user) return res.status(400).json({message:'User already exists'})
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    await Authentication.create({email: email, password: hashedPassword})
    const registerUser = await User.create({ email: email, dateBirth, first_name, last_name, phone, banned, access_level})
  
    if(registerUser) {
     return res.status(201).json({
        _id: registerUser.email,
        first_name: registerUser.first_name,
        last_name: registerUser.last_name,
        is_Admin: registerUser.access_level,
        is_banned:registerUser.banned,
        token:genAuthToken(registerUser._id)
      })
    }else{
      return res.status(400).json({message:"Invalid user data"})
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser
};
