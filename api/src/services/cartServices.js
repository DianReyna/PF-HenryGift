const { Box, Products, Category,Cart } = require("../database/index");
const { Op } = require("sequelize");

const saveUserCart = async (cart)=>{

  const {user_id} = cart
  const cartFound = await Cart.findOne({
    where:{
      user_id:user_id
    }
  })

  if(cartFound){
    var newCart = Cart.update(cart,{
      where:{
        user_id:user_id
      }
    })
  }else{

    var newCart = Cart.create(cart)
  }

  return newCart
}

const getUserCart = (user) => {
  const userCart = Cart.findOne({where:{user_id:user}})
  return userCart
}

module.exports = {
  saveUserCart,
  getUserCart
};