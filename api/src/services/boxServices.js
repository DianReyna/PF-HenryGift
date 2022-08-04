const { Box, Products } = require("../database/index");

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

module.exports = {
  createNewBox,
  getBox,
  findProducts,
};
