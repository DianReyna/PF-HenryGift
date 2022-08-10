const { User, OrderDetail } = require("../database/index");
const { Op } = require("sequelize");

const getAllUsers = async () => {
    var findAllBoxes = User.findAll({
    include: [{ model: OrderDetail }]
    });
    return findAllBoxes;
};

module.exports = {
  getAllUsers,
};
