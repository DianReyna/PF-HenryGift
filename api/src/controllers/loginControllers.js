const bcrypt = require('bcrypt');
const {changePassword}=require("../utils/sendEmail")
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

const forgotPassword = async (req, res, next) => {
  const {email} = req.body;
  try {
    if(!email ){
      return res.status(400).json({message:'Please write the email'})
    }
    let auth = await Authentication.findOne({ where: {email: email} })

    if (!auth) return res.status(400).json({message:'Unregistered user'})
    
   await changePassword(auth.dataValues.email)

  return res.json({message:"Confirmation change password was sent to your email"})

  } catch (error) {
    next(error);
  } 
};

const resetpassword = async (req, res, next) => {
  const {password} = req.body;
  const {email}=req.params;
  try {
    if(!password){
      return res.status(400).json({message:'Please write the password'})
    }
    // let auth = await Authentication.findOne({ where: {email: email} })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    await Authentication.update({ password: hashedPassword},{where: {email}})
    
  return  res.json({message:"Actualización exitosa"})

  } catch (error) {
    next(error);
  } 
};

module.exports = {
  loginUser,
  forgotPassword,
  resetpassword
};
