const {Category} = require("../database/index")

const createNewCategory = async(categoryName) =>{

    let newCategory = Category.create(categoryName)
    return newCategory
}

const getAllCategories = async()=>{

  let allCategories = await Category.findAll({attributes: ['id', 'name']})
 
  return allCategories

}

module.exports = {
  createNewCategory,
  getAllCategories
}