const User = require("../models/User");
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

const updateAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const admin = await userServices.updateAdmin(body, id);

    if (admin) {
      const newList = await userServices.getAllUsers();
      res.status(200).send(newList);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id, email } = req.params;
  try {
    const userId = await userServices.getUserById(id, email);
    if (!userId) {
      res.status(400).send({
        status: "error",
        message: "User not found",
      });
    }
    res.status(201).send(userId);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const update = await userServices.updateUser(id, body);
    if (update) {
      const newInfo = await userServices.getAllUsers();
      res.status(200).send("Successful update");
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const remove = await userServices.deleteUser(id);
    if (remove) {
        res.status(200).send("successfully deleted user");
    } else {
      res.status(404).send("sdelete user error!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateAdmin,
  getUserById,
  updateUser,
  deleteUser,
};
