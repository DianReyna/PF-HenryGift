const router = require("express").Router();
const {
  createReviews,
  getReviews,
} = require("../controllers/ReviewsUsersController");

router.post("/", createReviews);
router.get("/", getReviews);
module.exports = router;
