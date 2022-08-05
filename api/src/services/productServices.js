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

module.exports = {
  createNewProduct,
  getProductById,
};
