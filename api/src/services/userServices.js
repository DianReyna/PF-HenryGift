const { User, OrderDetail, Gift } = require("../database/index");
const { Op } = require("sequelize");

const createNewUser = async (user) => {
  if (user.email === "reynaarmas@gmail.com") {
    const userAdmin = {
      ...user,
      access_level: true,
    };
    const admin = User.create(userAdmin);
    return admin;
  }
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
  const userById = await User.findByPk(id, {
    where: {
      email: id,
      access_level: true,
    },
  });

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

const deleteUser = async (id) => {
  const remove = await User.destroy({
    where: {
      email: id,
    },
  });
  return remove;
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateAdmin,
  updateUser,
  getUserById,
  getUserAdmin,
  deleteUser,
};
