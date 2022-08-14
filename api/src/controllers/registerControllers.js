const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')
// const registerServices = require("../services/registerervices");

const registerUser = async (req, res, next) => {
  const {email, password, dateBirth, first_name, last_name, phone} = req.body;
  try {
    if(!email || !password || !dateBirth || !first_name || !last_name || !phone) {
      res.status(400)
      throw new Error("Please add all fields")
    }

    let user = await User.findOne({ where: {email: email} })

    if (user) {
      res.status(400)
      throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const auth = await Authentication.create({email: email, password: hashedPassword})

    const registerUser = await User.create({auth_id: auth.dataValues.id, email: email, dateBirth, first_name, last_name, phone})

    const token = genAuthToken(registerUser)

    if(registerUser) {
      res.status(201).json({
        _id: registerUser.email,
        first_name: registerUser.first_name
      })
      // res.send(token)
    }else{
      res.status(400)
      throw new Error("Invalid user data")
    }

  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser
};
