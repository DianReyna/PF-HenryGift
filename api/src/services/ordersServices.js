const { Box,User,Order,OrderDetail } = require("../database/index");
const { Op, UUID } = require("sequelize");

const createNewOrder = async (userId,amount) => {
    

    try {
      //console.log(amount)

      const findUser = await User.findByPk(userId)
     
      const newOrder= await Order.create({amount:amount,UserEmail:findUser.dataValues.email});
   
    
      return newOrder;

    } catch (error) {
      console.log(error)
    }
  
   
  };
  
  const getAllOrders = async()=>{
    const allOrders = await Order.findAll({ include: [{ model: OrderDetail, include: [Box] }]})
    return allOrders
  }

 /*  const getUserOrders = async(user)=>{
    const userOrders = await Order.findAll({
      where:{
        UserEmail: user,
      },
      include: [{ model: Box }]
    })
    return userOrders
  } */

module.exports = {
  createNewOrder,
  getAllOrders
  
};
