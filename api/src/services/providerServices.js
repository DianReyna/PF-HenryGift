const { Provider } = require("../database/index");

const getAllProviders = async () => {
  let allProviders = await Provider.findAll({
    attributes: ["id", "name", "phone", "address", "email"],
  });

  return allProviders;
};

const createNewProvider = async (newProvider) => {
  const createdProvider = await Provider.create(newProvider);

  return createdProvider;
};

const getProviderById = async (id) => {
  const providerById = await Provider.findByPk(id);
  return providerById;
};

const deleteProvider = async (id) => {
  const destroy = await Provider.destroy({
    where: {
      id: id,
    },
  });
  return destroy;
};

const updateProvider = async (id, body) => {
  const update = await Provider.update(body, {
    where: {
      id: id,
    },
  });
  return update;
};

module.exports = {
  getAllProviders,
  createNewProvider,
  getProviderById,
  deleteProvider,
  updateProvider,
};
