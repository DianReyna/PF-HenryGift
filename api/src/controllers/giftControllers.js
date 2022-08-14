const giftServices = require("../services/giftServices");
const boxServices = require("../services/boxServices");

const redeemGift = async (req, res, next) => {
  const { code} = req.body;
  try {
    const gift = await giftServices.redeemGift(code)
    //console.log(gift)
    if(!gift) return res.send("Invalid Code or It has been already redeemed")
    
    const box = await boxServices.getBox(gift.dataValues.box_id);
    
    return res.send(box)
    
  } catch (error) {
    next(error);
  }
};


module.exports = {
 redeemGift
};