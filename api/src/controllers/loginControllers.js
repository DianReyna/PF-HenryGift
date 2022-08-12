const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')
// const registerServices = require("../services/registerervices");

const loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    let auth = await Authentication.findOne({ where: {email: email, password: password} })
    console.log(auth)
    if (!auth) return res.status(400).send('Invalid email or password..1')

    // const isValid = await bcrypt.compare(hashedPassword, auth.password)
    
    // if (!isValid) return res.status(400).send('Invalid email or password..2')

    const token = genAuthToken(auth)
    
    res.send(token)
  } catch (error) {
    next(error);
  } 
};

module.exports = {
  loginUser
};
