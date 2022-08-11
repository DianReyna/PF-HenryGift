const { Box, Products, Category } = require("../database/index");
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

const findCategory = async (category) => {
  const findAllCategory = Category.findAll({
    where: {
      name: { [Op.iLike]: `%${category}` },
    },
  });
  return findAllCategory;
};

const getAllBoxes = async () => {
  
      const findAllBoxes = Box.findAll({
        include: [{ model: Category }],
      })
       
    return findAllBoxes;
  }


const deleteBox = async (id) => {
  const destroy = await Box.destroy({
    where: {
      id: id,
    },
  });
  return destroy;
};

module.exports = {
  createNewBox,
  getBox,
  findProducts,
  findCategory,
  getAllBoxes,
  deleteBox,
};
