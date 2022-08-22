const cartServices = require("../services/cartServices");

const saveUserCart = async (req, res,next) => {
 
  try {
    const createdCart = await cartServices.saveUserCart(req.body);
    //console.log(createdCategory)
    res.send(createdCart);
  } catch (error) {
    next(error);
  }
};

const getUserCart = async (req,res,next) => {
  const {user} = req.query
  try{
    const cartFound = await cartServices.getUserCart(user)
    res.send(cartFound)
  }catch(error){
    next(error)
  }

}

module.exports = {
  saveUserCart,
  getUserCart
};