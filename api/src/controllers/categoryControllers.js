const categoryServices = require("../services/categoryServices")

const createNewCategory = async(req,res)=>{

  try {

    const createdCategory = await categoryServices.createNewCategory(req.body)
    //console.log(createdCategory)
    res.send(createdCategory)
    
  } catch (error) {
    res.send(error)
  }
 
}

const getAllCategories = async(req,res)=>{

  try {

    const allCategories = await categoryServices.getAllCategories()
    res.send(allCategories)
    
  } catch (error) {
    console.log(error)
  }

}


module.exports={
  createNewCategory,
  getAllCategories
}