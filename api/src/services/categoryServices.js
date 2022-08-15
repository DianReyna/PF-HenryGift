const { Category } = require("../database/index");

const createNewCategory = async (categoryName) => {
  let newCategory = await Category.create(categoryName);
  return newCategory;
};

const getAllCategories = async () => {
  let allCategories = await Category.findAll({ attributes: ["id", "name"] });

  return allCategories;
};

const updateCategory = async (body, id) => {
  const categoryUp = await Category.update(body, {
    where: {
      id: id,
    },
  });
  return categoryUp;
};

const deleteCategory = async (id) => {
  const destroy = await Category.destroy({
    where: {
      id: id,
    },
  });
  return destroy;
};

module.exports = {
  createNewCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
