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

    res.send(createdProduct);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productById = await productServices.getProductById(id);
    res.send(productById);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewProduct,
  getProductById,
};
