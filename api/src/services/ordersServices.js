const {
  Box,
  User,
  Order,
  OrderDetail,
  GiftList,
} = require("../database/index");
const { Op, UUID } = require("sequelize");
const crypto = require("crypto");
const { sendCode } = require("../utils/sendEmail");


const createNewOrder = async (userId, amount) => {
  try {
    //console.log(amount)

    const findUser = await User.findByPk(userId);

    const newOrder = await Order.create({
      amount: amount,
      UserEmail: findUser.dataValues.email,
    });

    return newOrder;
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async () => {
  const allOrders = await Order.findAll({
    include: [{ model: OrderDetail, include: [Box] }],
  });
  return allOrders;
};

  const getUserOrders = async(user)=>{
    const userOrders = await Order.findAll({
      where:{
        UserEmail: user,
      },
      include: [{ model: OrderDetail, include: [Box] }]
    })
    return userOrders
  }; 

const createGiftList = async (boxes) => {
  try {
    let arrGiftList = boxes.map(async (box) => {
      let findBox = await Box.findOne({
        where: {
          name: box.name,
        },
      });
      let code = crypto.randomBytes(4).toString("hex");
      let newGiftList = GiftList.create({
        box_id: findBox.dataValues.id,
        code,
        recipient: box.recipient,
      });

      //await sendCode(box.recipient,code)

      return newGiftList;
    });

    await Promise.all(arrGiftList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewOrder,
  getAllOrders,
  createGiftList,
  getUserOrders  
};
