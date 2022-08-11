const { User, OrderDetail } = require("../database/index");
const { Op } = require("sequelize");

const createNewUser = async (user) => {
  const newUser = User.create(user);
  return newUser;
};

const getAllUsers = async () => {
    var findAllBoxes = User.findAll({
    include: [{ model: OrderDetail }]
    });
    return findAllBoxes;
};

module.exports = {
  getAllUsers,
  createNewUser
};
