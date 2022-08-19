const { Box, Products,GiftList,Gift, User,Picks,Provider } = require("../database/index");
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

const updateProductStock = async (id) => {

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

const createNewPick = async(user,product) => {
 let newPick = Picks.create({
  product_id: product,
  user_id:user
 })
 return newPick
}

const getQrInformation = async(user,product) => {

  let findPick = await Picks.findOne({
    where:{
      product_id:product,
      user_id:user
    }
  })

  console.log("soy el pickkk",findPick)

  let findProduct = await Products.findByPk(product,{
    include:{model:Provider}
  })

  console.log("soy el prodd",findProduct.Provider)

  let qrInformation = {
    user:user,
    providerName:findProduct.Provider.dataValues.name,
    productName:findProduct.dataValues.name,
    redeemed:findPick.dataValues.redeemed

  }
  return qrInformation
}

module.exports = {
  redeemGift,
  updateProductStock,
  addGift,
  getUserGifts,
  getBoxList,
  createNewPick,
  getQrInformation
};