const { ReviewsUsers, Box, User } = require("../database");

const newReviews = async (query, body) => {
  const findBox = await Box.findOne({
    where: {
      id: query.box_id,
    },
  });

  console.log(findBox);
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
    attributes: ["menssageBox", "scoreBox", "createdAt", "user_id"],
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
module.exports = {
  newReviews,
  getReview,
};
