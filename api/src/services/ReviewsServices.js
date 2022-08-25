const { ReviewsUsers, Box, User } = require("../database");

const newReviews = async (query, body) => {
  const findBox = await Box.findOne({
    where: {
      id: query.box_id,
    },
  });

  const findUser = await User.findOne({
    where: {
      email: query.user_id,
    },
  });

  const newReviewsBox = {
    user_id: findUser.dataValues.email,
    box_id: findBox.dataValues.id,
    ...body,
  };
  const newReview = await ReviewsUsers.create(newReviewsBox);

  return newReview;
};

const getReview = async (box_id) => {
  const findReview = await ReviewsUsers.findAll({
    where: {
      box_id,
    },
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  });
  return findReview;
};

const getUserReview = async (user_id) => {
  const userReview = await ReviewsUsers.findAll({
    where: {
      user_id: user_id,
    },
  });
  return userReview;
};

module.exports = {
  newReviews,
  getReview,
  getUserReview,
};
