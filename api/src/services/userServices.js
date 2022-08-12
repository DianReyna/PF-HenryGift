const { User, OrderDetail } = require("../database/index");
const { Op } = require("sequelize");

const createNewUser = async (user) => {
  const newUser = User.create(user);
  return newUser;
};

const getAllUsers = async () => {
  var findAllBoxes = User.findAll({
    include: [{ model: OrderDetail }],
  });
  return findAllBoxes;
};

const updateAdmin = async (body, id) => {
  const updateAdmin = await User.update(body, {
    where: {
      email: id,
    },
  });
  return updateAdmin;
};

const getUserById = async (id, email) => {
  const userById = await User.findByPk(id, email);
  return userById;
};

const updateUser = async (id, body) => {
  const update = await Provider.update(body, {
    where: {
      id: id,
      email: email,
    },
  });
  return update;
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateAdmin,
  updateUser,
  getUserById,
};
