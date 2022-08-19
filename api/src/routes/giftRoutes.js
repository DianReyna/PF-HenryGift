const { Router } = require("express");
const router = Router();
const {
  redeemGift, productPicked, getUserGifts,getQrInformation
} = require("../controllers/giftControllers");

router.post("/", redeemGift);
router.post("/picked",productPicked)
router.get("/usergifts",getUserGifts)
router.get("/qr",getQrInformation)
module.exports = router;
