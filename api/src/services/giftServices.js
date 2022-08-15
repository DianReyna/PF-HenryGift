const { Box, Products,GiftList,Gift, User } = require("../database/index");
const { Op } = require("sequelize");


const redeemGift = async (code) => {
  
  let gift = await GiftList.findOne({
    where:{
      code:code,
      redeemed:false
    }
  })
  //console.log(gift)
  return gift

};

const productPicked = async (id) => {

  let findProduct = await Products.findByPk(id);
  let newStock = findProduct.dataValues.quantity - 1

  let updateStock = await Products.update({quantity:newStock}, {
    where: {
      id: id,
    },
  });
  //console.log(updateStock)
  return updateStock

}

const addGift = async (gift) => {
    await Gift.create({
    email:gift.recipient,
    box_id:gift.box_id
})}

const getUserGifts = async (user) => {
  let userGifts = await Gift.findAll({
    where:{
      email:user
    }
  })
  //console.log(userGifts)
  return userGifts
}

const getBoxList = async(boxes) => {
  let userBoxes = await Box.findAll({
    where:{
      id:{
        [Op.in] : boxes
      }
    },
    
  })
  //console.log(userBoxes)
  return userBoxes
}

module.exports = {
  redeemGift,
  productPicked,
  addGift,
  getUserGifts,
  getBoxList
};