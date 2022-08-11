const userServices = require("../services/userServices");

const createNewUser = async (req, res, next) => {
  try {
    const newUser = await userServices.createNewUser(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userServices.getAllUsers();

    if (allUsers || allUsers.length > 0) {
      res.status(200).send(allUsers);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createNewUser
};
