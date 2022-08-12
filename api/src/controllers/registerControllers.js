const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')
// const registerServices = require("../services/registerervices");

const registerUser = async (req, res, next) => {
  const {email, password, dateBirth, first_name, last_name, phone} = req.body;
  try {

    let user = await User.findOne({ where: {email: email} })

    if (user) return res.status(400).send('User already exists')

    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    const auth = await Authentication.create({email: email, password: password})

    const registerUser = await User.create({auth_id: auth.dataValues.id, email: email, dateBirth, first_name, last_name, phone})

    const token = genAuthToken(registerUser)
    
    res.send(token)

  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser
};
