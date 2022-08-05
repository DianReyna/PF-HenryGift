const {Box} = require("../database/index.js");
const { Op } = require("sequelize");

const getBoxesFilterByPrice = async (min,max) => {
  const boxFilteredByPrice = await Box.findAll({
    where: {
      price: {
        [Op.between]: [min, max]
      },
      person:{
        [Op.eq] : null
      }
    }
  });
  return boxFilteredByPrice;
};

module.exports={
  getBoxesFilterByPrice
}