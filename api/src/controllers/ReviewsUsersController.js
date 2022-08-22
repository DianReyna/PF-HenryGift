const reviewsServices = require("../services/ReviewsServices");

const createReviews = async (req, res, next) => {
  const { query } = req;
  const { body } = req;
  try {
    const createReview = await reviewsServices.newReviews(query, body);

    if (createReview) {
      res.send(createReview);
    }
  } catch (error) {
    next(error);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const { box_id } = req.query;
    const reviews = await reviewsServices.getReview(box_id);
    if (reviews) {
      res.send(reviews);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReviews,
  getReviews,
};
