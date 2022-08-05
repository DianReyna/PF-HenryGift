const { Box, Products,Category } = require("../database/index");
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
const getAllBoxes = async (name,offset,limit) => {
  if (name) {
    const getOneBox = await Box.findAll({
      include: [{ model: Category }],
      where: {
        name: {
          [Op.iLike]: `%${name}`,
        },
      },
    });
    return getOneBox;
  } else {
    const findAllBoxes = Box.findAll({ include: [{ model: Category }],offset,limit});
    return findAllBoxes;
  }
};

module.exports = {
  createNewBox,
  getBox,
  findProducts,
  getAllBoxes,
};
