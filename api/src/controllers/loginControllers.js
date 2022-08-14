const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')

const loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    if(!email || !password){
      res.status(400)
      throw new Error('Please add all fields')
    }
    let auth = await Authentication.findOne({ where: {email: email} })

    if (!auth) return res.status(400).send('Invalid email')

    const isValid = await bcrypt.compare(password, auth.password)

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
