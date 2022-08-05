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
module.exports = {
  getAllProviders,
  createNewProvider,
};
