const { Products, Provider } = require("../database/index.js");

const createNewProduct = async (newProduct, provider) => {
  const prov = await Provider.findOne({
    where: {
      name: provider,
    },
  });

  const productToInsert = {
    ...newProduct,
    provider_id: prov.dataValues.id,
  };

  const createdProduct = await Products.create(productToInsert);

  return createdProduct;
};

const getProductById = async (id) => {
  const productById = await Products.findByPk(id, {
    include: [Provider],
  });
  return productById;
};

<<<<<<< HEAD
const getAllProducts = async()=>{

  let allProducts = await Products.findAll({include: [Provider]})
  console.log("entro al service")
  return allProducts

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
