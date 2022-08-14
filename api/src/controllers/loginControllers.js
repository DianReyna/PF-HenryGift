const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')
// const registerServices = require("../services/registerervices");

const loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    let auth = await Authentication.findOne({ where: {email: email} })

    if (!auth) return res.status(400).send('Invalid email')

    const isValid = await bcrypt.compare(password, auth.password)
    console.log(isValid)
    if (!isValid) return res.status(400).send('Invalid email or password')

    const token = genAuthToken(auth)
    
    res.send(token)

  } catch (error) {
    next(error);
  } 
};

module.exports = {
  loginUser
};
