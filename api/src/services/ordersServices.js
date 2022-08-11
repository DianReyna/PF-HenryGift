const { Box,User,Order } = require("../database/index");
const { Op, UUID } = require("sequelize");

const createNewOrder = async (boxes,userId,amount) => {
    

    try {
      //console.log(amount)

      const findUser = await User.findByPk(userId)
    
      const newOrder= await Order.create({amount:amount,UserEmail:findUser.dataValues.email});
      //console.log(boxes)
      const findAllBoxes = await Box.findAll({
        where: {
          name: {
           [Op.in] :boxes
          }
        },
      });
      
      const orderCreated = await newOrder.addBoxes(findAllBoxes)
     
      return orderCreated;

    } catch (error) {
      console.log(error)
    }
  
   
  };
  
  const getAllOrders = async()=>{
    const allOrders = await Order.findAll({ include: [{ model: Box }]})
    return allOrders
  }

  const getUserOrders = async(user)=>{
    const userOrders = await Order.findAll({
      where:{
        UserEmail: user,
      },
      include: [{ model: Box }]
    })
    return userOrders
  }

module.exports = {
  createNewOrder,
  getAllOrders,
  getUserOrders
  
};
