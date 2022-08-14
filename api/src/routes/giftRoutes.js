const { Router } = require("express");
const router = Router();
const {
  redeemGift
} = require("../controllers/giftControllers");

router.post("/", redeemGift);
router.post("/picked")


module.exports = router;
