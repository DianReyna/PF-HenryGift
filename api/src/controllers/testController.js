const { Box, Products, Category } = require("../database/index");
const testServices = require("../services/testServices");
const { Op } = require("sequelize");


const getAllBoxes = async (req, res, next) => {
  const { name, offset, limit,col,dir,category,num } = req.query;

 const condition = {
    include: { model: Category },limit,offset:limit * offset,
   
  }

  if(name || num) condition.where = {}

  if(name) condition.where.name = { [Op.iLike]: `%${name}%`}

  if(col && dir) condition.order = [ [col, dir]]

  if(category) condition.include.where={
    name: {
      [Op.iLike]: `%${category}`,
    },
  }

  if(num) condition.where.person = { [Op.eq]: num}
  console.log(offset)

  try {
    const allBoxes = await testServices.getAllBoxes(condition);

    if (allBoxes || allBoxes.length > 0) {
      res.status(200).send(allBoxes);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  
  getAllBoxes,
};