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
  const { name, offset, limit,col,dir } = req.query;
  try {
    const allBoxes = await boxServices.getAllBoxes(name, offset, limit,col,dir);

    if (allBoxes || allBoxes.length > 0) {
      res.status(200).send(allBoxes);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createNewBox,
  getBox,
  getAllBoxes,
};
