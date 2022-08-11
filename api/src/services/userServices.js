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
  // console.log(updateAdmin);
  return updateAdmin;
};
module.exports = {
  getAllUsers,
  createNewUser,
  updateAdmin,
};
