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
<<<<<<< HEAD

    res.send(createdProduct);
=======
    if (createdProduct) {
      res.status(201).send("Product created!");
    } else {
      res.status(404).send("Error creating product!");
    }
>>>>>>> e184f73668429ea058859b6265720a31a0b701ae
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productById = await productServices.getProductById(id);
<<<<<<< HEAD
    res.send(productById);
=======

    if (productById) {
      res.status(200).send(productById);
    } else {
      res.status(404).send("Not Fund!");
    }
>>>>>>> e184f73668429ea058859b6265720a31a0b701ae
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD
const getAllProducts = async(req,res)=>{

  try {

    const allProducts = await productServices.getAllProducts()
    console.log("entro al controller")
    res.send(allProducts)
    
  } catch (error) {
    console.log(error)
  }

}



module.exports = {
  createNewProduct,
  getProductById,
  getAllProducts
};




















=======
module.exports = {
  createNewProduct,
  getProductById,
};
>>>>>>> e184f73668429ea058859b6265720a31a0b701ae
