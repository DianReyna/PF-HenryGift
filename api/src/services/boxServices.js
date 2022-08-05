const { Box, Products } = require("../database/index");
const { Op } = require("sequelize");

const createNewBox = async (box) => {
  const newBox = Box.create(box);
  return newBox;
};

const getBox = async (id) => {
  const findBox = await Box.findByPk(id, {
    include: [{ model: Products }],
  });
  return findBox;
};

const findProducts = async (products) => {
  const findAllProducts = Products.findAll({
    where: {
      name: products,
    },
  });
  return findAllProducts;
};
const getAllBoxes = async (name) => {
  if (name) {
    const getOneBox = await Box.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}`,
        },
      },
    });
    return getOneBox;
  } else {
    const findAllBoxes = Box.findAll();
    return findAllBoxes;
  }
};

module.exports = {
  createNewBox,
  getBox,
  findProducts,
  getAllBoxes,
};
