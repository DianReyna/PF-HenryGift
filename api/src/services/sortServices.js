const { Box} = require("../database/index");
const { Op} = require("sequelize");

const sortBoxes = async (col,dir) => {
  console.log(col)
  const sortedBoxes = await Box.findAll({
   
    order: [ [col, dir]]

  });
  return sortedBoxes;
};

module.exports={
  sortBoxes
}