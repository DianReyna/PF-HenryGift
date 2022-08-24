const { Router } = require("express");
const router = Router();
const {
  salesBox,
  raitingBox,
  favouriteBox,
  userSales,
} = require("../controllers/adminController");

router.get("/raiting", raitingBox);
router.get("/favourites", favouriteBox);
router.get("/sales", userSales);
router.get("/", salesBox);

module.exports = router;
