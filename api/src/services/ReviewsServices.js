const { ReviewsUsers, Box, User } = require("../database");
const { Op, fn, col } = require("sequelize");

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

  const countUser = await countUserReview(query.box_id);
  const totalReviews = await totalReview(query.box_id);

  const resultUserReview = countUser[0].count * 5;
  const resultProm = (parseInt(totalReviews[0].total) / resultUserReview) * 5;

  const update = await updateRanking(query.box_id, resultProm);

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

const countUserReview = async (box_id) => {
  const reviewBox = await ReviewsUsers.count({
    where: {
      box_id,
    },
    group: ["box_id"],
  });
  return reviewBox;
};

const totalReview = async (box_id) => {
  const totalReview = await ReviewsUsers.findAll({
    where: {
      box_id,
    },
    attributes: ["box_id", [fn("sum", col("scoreBox")), "total"]],
    group: ["box_id"],
    raw: true,
  });
  return totalReview;
};

const updateRanking = async (box_id, rating) => {
  const ratingBox = await Box.update(
    {
      ranking: rating,
    },
    {
      where: {
        id: box_id,
      },
    }
  );
  return ratingBox;
};

module.exports = {
  newReviews,
  getReview,
  getUserReview,
};
