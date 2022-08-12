const { Box,User,Order,OrderDetail } = require("../database/index");
const { Op, UUID } = require("sequelize");
const ordersServices = require("../services/ordersServices");

const createNewOrder = async (req, res, next) => {
  
  try {
   

    const boxes = req.body.boxes;
    const  userId = req.body.userId
    
    const createdOrder = await ordersServices.createNewOrder(userId,req.body.amount);
   
    let arrPromises = boxes.map(async(box)=>{
      let findBox = await Box.findOne({
        where:{
          name: box.name
        }
      })
      let newItem = OrderDetail.create({
        box_id:findBox.dataValues.id,
        quantity:box.quantity,
        is_gift:box.isGift,
        UserEmail:userId,
        order_id:createdOrder.dataValues.id
      })
      return newItem
    })
    
    await Promise.all(arrPromises)

    if (createdOrder) {
      res.status(201).send(createdOrder);
    } else {
      res.status(404).send("Error creating order!");
    }
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  
  try {
  
    const allOrders = await ordersServices.getAllOrders();

    if (allOrders) {
      res.status(201).send(allOrders);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    next(error);
  }
};

/* const getUserOrders = async(req,res,next)=>{

  const {user} = req.query

  try {
  
    const userOrders = await ordersServices.getUserOrders(user);

    if (userOrders) {
      res.status(201).send(userOrders);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    next(error);
  }
} */

module.exports={
  getAllOrders,
  createNewOrder,
  
}