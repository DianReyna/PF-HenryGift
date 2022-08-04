const {Products,Provider} = require("../database/index")



const getAllProducts = async()=>{

  let allProducts = await Products.findAll({include: [Provider]})
  console.log("entro al service")
  return allProducts

}

module.exports = {
  getAllProducts,
}