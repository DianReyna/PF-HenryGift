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

const getUserAdmin = async () => {
  const userAdmin = await User.findAll({
    where: {
      access_level: true,
    },
  });
  return userAdmin;
};
const getUserById = async (id) => {
  const userById = await User.findByPk(id);
  return userById;
};

const updateUser = async (id, body) => {
  const update = await User.update(body, {
    where: {
      email: id,
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
  getUserAdmin,
};
