const { Box, Products,GiftList } = require("../database/index");
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


}

module.exports = {
  redeemGift
};