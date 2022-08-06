const productServices = require("../services/productServices.js");

const { Products, Provider } = require("../database/index.js");
const createNewProduct = async (req, res, next) => {
  const { body } = req;
  try {
    if (
      !body.name ||
      !body.description ||
      !body.price ||
      !body.location ||
      !body.image
    ) {
      return;
    }

    const provider = body.provider;

    const newProduct = {
      name: body.name,
      description: body.description,
      price: body.price,
      location: body.location,
      image: body.image,
    };

    const createdProduct = await productServices.createNewProduct(
      newProduct,
      provider
    );
    if (createdProduct) {
      res.status(201).send("Product created!");
    } else {
      res.status(404).send("Error creating product!");
    }
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productById = await productServices.getProductById(id);

    if (productById) {
      res.status(200).send(productById);
    } else {
      res.status(404).send("Not Fund!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewProduct,
  getProductById,
};