const genAuthToken = require('../utils/genAuthToken')
const registerServices = require("../services/registerServices");

const registerUser = async (req, res, next) => {
  const body = req.body;
  try {
    let registerUser = await registerServices.createNewUser(body)

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
