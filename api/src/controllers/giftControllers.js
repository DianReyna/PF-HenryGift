const giftServices = require("../services/giftServices");
const boxServices = require("../services/boxServices");
const { GiftList,Gift,Box, Products } = require("../database/index");
const QrCode = require("qrcode")
const { sendQr } = require("../utils/sendEmail");
const redeemGift = async (req, res, next) => {
  const { code} = req.body;
  try {
    const gift = await giftServices.redeemGift(code)
    //console.log(gift)
    if(!gift) return res.send("Invalid Code or It has been already redeemed")
    
    const box = await boxServices.getBox(gift.dataValues.box_id);
    const addGiftUser = await giftServices.addGift(gift.dataValues)
    await GiftList.update({redeemed:true},
     { where:{code:code}})
    return res.send(box)
    
  } catch (error) {
    next(error);
  }
};

  const productPicked = async(req,res,next) => {
    const {productId,userId} = req.body

    console.log(productId)
    try{

      let foundBox = await Box.findOne({
        include:{model:Products,where:{
          id:productId
        }}
      })

      //console.log(foundBox)

      let findGift = await Gift.findOne({
        where:{
          email:userId,
          box_id:foundBox.dataValues.id,
          redeemed:false
        }
      })

      //console.log(findGift)

      if(findGift){
        await giftServices.updateGift(userId,foundBox.dataValues.id)

        await giftServices.createNewPick(userId,productId)

        await giftServices.updateProductStock(productId)

        let img = await QrCode.toDataURL(`http://127.0.0.1:5173/onlyproviders?user=${userId}&product=${productId}`);
        await sendQr(userId,img)

        res.send("Product redeem")
      }else{
        res.send("You dont own that box")
      }

    }catch (error){
      next(error)
    }
  }

  const getUserGifts = async(req,res,next)=>{
    let {user} = req.query

    try{

      let findGifts = await giftServices.getUserGifts(user)
      let arrBoxId = findGifts.map(gift=>gift.dataValues.box_id)
      //console.log(arrBoxId)
      let boxesList = await giftServices.getBoxList(arrBoxId)
      res.send(boxesList)
    }catch(error){
      next(error)
    }
  }
  
  const getQrInformation = async(req,res,next)=>{
    let {userId,productId} = req.query

    try{

      let qrInformation = await giftServices.getQrInformation(userId,productId)
      res.send(qrInformation)
      
    }catch(error){
      next(error)
    }
  }

module.exports = {
 redeemGift,
 productPicked,
 getUserGifts,
 getQrInformation
};