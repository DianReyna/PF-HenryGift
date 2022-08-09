const { Box, Products, Category } = require("../database/index");
const { Op } = require("sequelize");

const getAllBoxes = async (condition) => {
  
    const findBoxes = await Box.findAll(condition);
    return findBoxes;
  } 
    
  


module.exports = {
  getAllBoxes,
};