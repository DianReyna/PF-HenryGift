const { Box, Products, Category, ReviewsUsers } = require("../database/index");
const { Op } = require("sequelize");

const createNewBox = async (box) => {
  const newBox = Box.create(box);
  return newBox;
};

const getBox = async (id) => {
  const findBox = await Box.findByPk(id, {
    include: [
      {
        model: Products,
        where: {
          quantity: {
            [Op.gt]: 4,
          },
        },
      },
    ],
  });
  return findBox;
};

const findProducts = async (products) => {
  const findAllProducts = await Products.findAll({
    where: {
      name: products,
    },
  });
  return findAllProducts;
};

const findCategory = async (category) => {
  const findAllCategories = await Category.findAll({
    where: {
      name: category,
    },
  });
  return findAllCategories;
};

const getAllBoxes = async () => {
  const findAllBoxes = await Box.findAll({
    include: [{ model: Category }],
  });
  await rankingBox();
  return findAllBoxes;
};

const getAdminBoxes = async () => {
  const findAllBoxes = await Box.findAll({
    include: [Category, Products],
  });

  return findAllBoxes;
};

const deleteBox = async (id) => {
  const destroy = await Box.destroy({
    where: {
      id: id,
    },
  });
  return destroy;
};

const updateBox = async (id, body) => {
  const update = await Box.update(body, {
    where: {
      id: id,
    },
  });
  return update;
};

const rankingBox = async () => {
  const boxReview = await Box.findAll({
    include: [
      {
        model: ReviewsUsers,
        attributes: ["scoreBox"],
      },
    ],
  });
  boxReview?.map(async (el) => {
    const array = {
      users: [],
      reviews: [],
    };
    el.dataValues.ReviewsUsers?.map((item) => {
      array.reviews.push(item.dataValues.scoreBox);
    });
    array.users.push(el.dataValues.ReviewsUsers.length);
    const sum = array.reviews.reduce((total, review) => {
      total += review;
      array.reviews = [];
      return total;
    }, 0);
    const sumUser = array.users.reduce((total, user) => {
      total += user;
      array.users = [];
      return total;
    }, 0);
    const rating = sum / sumUser;

    const ratingBox = await Box.update(
      {
        ranking: rating,
      },
      {
        where: {
          id: el.dataValues.id,
        },
      }
    );
    return ratingBox;
  });
  return boxReview;
};

module.exports = {
  createNewBox,
  getBox,
  findProducts,
  findCategory,
  getAllBoxes,
  deleteBox,
  updateBox,
  getAdminBoxes,
};
