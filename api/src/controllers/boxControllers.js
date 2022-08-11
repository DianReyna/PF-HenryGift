const { Box } = require("../database/index");
const { Products } = require("../database/index");
const boxServices = require("../services/boxServices");

const createNewBox = async (req, res, next) => {
  const { products, category } = req.body;
  try {
    const newBox = await boxServices.createNewBox(req.body);

    const findedProducts = await boxServices.findProducts(products);
    newBox.addProducts(findedProducts);

    const findedCategory = await boxServices.findCategory(category);
    newBox.addCategory(findedCategory);

    res.send(newBox);
  } catch (error) {
    next(error);
  }
};

const getBox = async (req, res, next) => {
  try {
    const { id } = req.params;
    const box = await boxServices.getBox(id);
    if (box) {
      res.status(201).send(box);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    next(error);
  }
};

const getAllBoxes = async (req, res, next) => {
 
  try {
    const allBoxes = await boxServices.getAllBoxes();

    if (allBoxes || allBoxes.length > 0) {
      res.status(200).send(allBoxes);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};

const deleteBox = async (req, res, next) => {
  const { id } = req.params;
  try {
    const box = await boxServices.getBox(id);
    if (!box) {
      return res.status(404).send("Product not found...");
    }
    const destroy = await boxServices.deleteBox(id);
    if (destroy) {
      const newlist = await boxServices.getAllBoxes();
      res.status(200).send(newlist);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createNewBox,
  getBox,
  getAllBoxes,
  deleteBox,
};
