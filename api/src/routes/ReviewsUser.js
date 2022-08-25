const router = require("express").Router();
const {
  createReviews,
  getReviews,
  getUserReviews,
} = require("../controllers/ReviewsUsersController");

router.post("/", createReviews);
router.get("/userReview", getUserReviews);
router.get("/", getReviews);
module.exports = router;
