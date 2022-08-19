const bcrypt = require('bcrypt')
const { User, Authentication } = require("../database/index");
const genAuthToken = require('../utils/genAuthToken')

const loginUser = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    if(!email || !password){
      return res.status(400).json({message:'Please add all fields'})
    }
    let auth = await Authentication.findOne({ where: {email: email} })

    if (!auth) return res.status(400).json({message:'Invalid email'})

    const isValid = await bcrypt.compare(password, auth.password)

    if (!isValid) return res.status(400).json({message:'Invalid password'})

    const user=await User.findOne({ where: {email: email} })

    return res.json({
      _id: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      is_Admin: user.access_level,
      is_banned:user.banned,
      token:genAuthToken(user._id)
    })

  } catch (error) {
    next(error);
  } 
};

module.exports = {
  loginUser
};
