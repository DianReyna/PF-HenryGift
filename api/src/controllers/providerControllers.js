const providerServices = require("../services/providerServices");

const getAllProviders = async (req, res) => {
  try {
    const allProviders = await providerServices.getAllProviders();
    res.send(allProviders);
  } catch (error) {
    console.log(error);
  }
};
const createNewProvider = async (req, res, next) => {
  const { body } = req;
  try {
    const newProvider = {
      name: body.name,
      phone: body.phone,
      address: body.address,
      email: body.email,
    };
    const createdProvider = await providerServices.createNewProvider(
      newProvider
    );
    if (createdProvider) {
      res.status(201).send("Provider Created!");
    } else {
      res.status(404).send("Error creating provider!");
    }
  } catch (error) {
    next(error);
  }
};

const deleteProvider = async (req, res, next) => {
  const { id } = req.params;
  try {
    const provider = await providerServices.getProviderById(id);
    if (!provider) {
      return res.status(404).send("Provider not found...");
    }
    const destroy = await providerServices.deleteProvider(id);
    if (destroy) {
      const newlist = await providerServices.getAllProviders();
      res.status(200).send(newlist);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

const updateProvider = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const provider = await providerServices.getProviderById(id);
    if (!provider) {
      return res.status(404).send("Provider not found...");
    }
    const update = await providerServices.updateProvider(id, body);
    if (update) {
      const newList = await providerServices.getAllProviders();
      res.status(200).send(newList);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProviders,
  createNewProvider,
  deleteProvider,
  updateProvider,
};
