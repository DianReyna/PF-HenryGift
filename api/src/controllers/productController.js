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

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await productServices.getAllProducts();
    res.status(200).send(allProducts);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await productServices.getProductById(id);
    if (!product) {
      return res.status(404).send("Product not found...");
    }
    const destroy = await productServices.deleteProduct(id);
    if (destroy) {
      const newlist = await productServices.getAllProducts();
      res.status(200).send(newlist);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const product = await productServices.getProductById(id);
    const prov = await productServices.findProvider(body.provider);
    !product
      ? res.status(404).send("Product not found...")
      : !prov
      ? res.status(404).send("Provider not found...")
      : null;
    const update = await productServices.updateProduct(id, body);
    if (update) {
      const newList = await productServices.getAllProducts();
      res.status(200).send(newList);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

const putStatusProduct = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const status = await productServices.productUpdate(id, body);
    if (status) {
      const newListProd = await productServices.getAllProducts();
      res.status(200).send(newListProd);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewProduct,
  getProductById,
  getAllProducts,
  deleteProduct,
  updateProduct,
  putStatusProduct,
};
