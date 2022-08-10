const { Box} = require("../database/index");
const { Op} = require("sequelize");

const sortBoxes = async (col,dir) => {
  console.log(col)
  const sortedBoxes = await Box.findAll({
    limit:4,
    order: [ [col, dir]]

  });
  return sortedBoxes;
};

module.exports={
  sortBoxes
}