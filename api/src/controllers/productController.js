const productServices = require("../services/productServices.js");
const cloudinary = require("../utils/cloudinary.js");
const { Products, Provider } = require("../database/index.js");
const createNewProduct = async (req, res, next) => {
  const { body } = req;
  try {
    if (body.image) {
      const uploadRes = await cloudinary.uploader.upload(body.image, {
        upload_preset: "henry-gift",
      });

      if (uploadRes) {
        const newItemProduct = {
          name: body.name,
          description: body.description,
          price: body.price,
          location: body.location,
          image: uploadRes,
        };
        const provider = body.provider;
        const createdProduct = await productServices.createNewProduct(
          newItemProduct,
          provider
        );
        if (createdProduct) {
          const newListProd = await productServices.getAllProducts();
          res.status(201).send(newListProd);
        }
      }
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

    if (body.image !== "") {
      const updateRes = await cloudinary.uploader.upload(body.image, {
        upload_preset: "henry-gift",
      });
      if (updateRes) {
        const updateProd = await productServices.updateProduct(id, {
          ...body,
          image: updateRes,
        });
        if (updateProd) {
          const newListProd = await productServices.getAllProducts();
          return res.status(200).send(newListProd);
        }
      }
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
