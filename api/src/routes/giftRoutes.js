const { Router } = require("express");
const router = Router();
const {
  redeemGift, productPicked, getUserGifts
} = require("../controllers/giftControllers");

router.post("/", redeemGift);
router.post("/picked",productPicked)
router.get("/usergifts",getUserGifts)

module.exports = router;
