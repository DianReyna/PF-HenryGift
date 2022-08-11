const { User, OrderDetail } = require("../database/index");
const { Op } = require("sequelize");

const getAllUsers = async () => {
    var findAllBoxes = User.findAll({
    include: [{ model: OrderDetail }]
    });
    return findAllBoxes;
};

const createUser = async (newUser) =>{
  const createNewUser = await User.create(newUser);
  return createNewUser;
}

const getUserById = async (id) => {
  const userById = await User.findByPk(id);
  return userById;
};


module.exports = {
  getAllUsers,
  createUser,
  getUserById
};
