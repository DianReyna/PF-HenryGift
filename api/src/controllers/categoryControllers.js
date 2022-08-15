const categoryServices = require("../services/categoryServices");

const createNewCategory = async (req, res) => {
  try {
    const createdCategory = await categoryServices.createNewCategory(req.body);
    //console.log(createdCategory)
    res.send(createdCategory);
  } catch (error) {
    res.send(error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await categoryServices.getAllCategories();
    res.send(allCategories);
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const update = await categoryServices.updateCategory(body, id);
    if (update) {
      const newListCat = await categoryServices.getAllCategories();
      res.status(200).send(newListCat);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};
const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteCategory = await categoryServices.deleteCategory(id);
    if (deleteCategory) {
      const newlist = await categoryServices.getAllCategories();
      res.status(200).send(newlist);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
};
