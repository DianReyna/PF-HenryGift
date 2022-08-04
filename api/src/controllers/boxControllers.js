const { Box } = require("../database/index");
const { Products } = require("../database/index");
const boxServices = require("../services/boxServices");

const createNewBox = async (req, res, next) => {
  const { products } = req.body;
  try {
    const newBox = await boxServices.createNewBox(req.body);
    const findedProducts = await boxServices.findProducts(products);
    newBox.addProducts(findedProducts);
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

module.exports = {
  createNewBox,
  getBox,
};
