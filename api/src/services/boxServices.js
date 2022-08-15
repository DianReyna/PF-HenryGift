const { Box, Products, Category } = require("../database/index");
const { Op } = require("sequelize");

const createNewBox = async (box) => {
  const newBox = Box.create(box);
  return newBox;
};

const getBox = async (id) => {
  const findBox = await Box.findByPk(id, {
    include: [{ model: Products,where:{
      quantity:{
        [Op.gt]: 4
      }
    } }],
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
  const findAllCategory = await Category.findAll({
    where: {
      name: { [Op.iLike]: `%${category}` },
    },
  });
  return findAllCategory;
};

const getAllBoxes = async () => {
  const findAllBoxes = await Box.findAll({
    include: [{ model: Category }],
  });

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
