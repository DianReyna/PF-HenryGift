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

const getAllProducts = async () => {
  const allProducts = await Products.findAll({
    include: [Provider],
  });
  return allProducts;
};

const deleteProduct = async (id) => {
  const destroy = await Products.destroy({
    where: {
      id: id,
    },
  });
  return destroy;
};

const findProvider = async (provider) => {
  const find = await Provider.findOne({
    where: {
      name: provider,
    },
  });
  return find;
};

const updateProduct = async (id, body) => {
  const find = await getProductById(id);

  const provi = await findProvider(body.provider);

  if (find.dataValues.provider_id !== provi.dataValues.id) {
    const data = {
      ...body,
      provider_id: provi.dataValues.id,
    };
    const updateProvider = await Products.update(data, {
      where: {
        id: id,
      },
    });
    return updateProvider;
  }

  const update = await Products.update(body, {
    where: {
      id: id,
    },
  });
  return update;
};
module.exports = {
  createNewProduct,
  getProductById,
  getAllProducts,
  deleteProduct,
  findProvider,
  updateProduct,
};
