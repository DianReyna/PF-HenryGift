const ordersServices = require("../services/ordersServices");

const createNewOrder = async (req, res, next) => {
  
  try {
   

    const boxes = req.body.boxes;
    const  userId = req.body.userId

    const createdOrder = await ordersServices.createNewOrder(boxes,userId,req.body.amount);

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

const getUserOrders = async(req,res,next)=>{

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
}

module.exports={
  getAllOrders,
  createNewOrder,
  getUserOrders
}