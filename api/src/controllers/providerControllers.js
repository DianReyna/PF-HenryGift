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

module.exports = {
  getAllProviders,
  createNewProvider,
};
