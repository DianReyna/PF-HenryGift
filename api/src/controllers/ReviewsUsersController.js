const reviewsServices = require("../services/ReviewsServices");

const createReviews = async (req, res, next) => {
  const { query } = req;
  const { body } = req;
  try {
    const createReview = await reviewsServices.newReviews(query, body);
    if (createReview) {
      const newListReview = await reviewsServices.getReview(query.box_id);
      res.send(newListReview);
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

const getUserReviews = async (req, res, next) => {
  try {
    const { box_id, user_id } = req.query;

    const reviews = await reviewsServices.getUserReview(box_id, user_id);
    if (reviews) {
      res.status(200).send(reviews);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReviews,
  getReviews,
  getUserReviews,
};
