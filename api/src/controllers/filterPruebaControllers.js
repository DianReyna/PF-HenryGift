const filterPruebaServices = require("../services/filterPruebaServices")

const getBoxesFilterByPrice = async(req,res)=>{

  const {min,max} = req.query

  try {

    const boxesFilterByPrice = await filterPruebaServices.getBoxesFilterByPrice(min,max)
    res.send(boxesFilterByPrice)
    
  } catch (error) {
    console.log(error)
  }

}


module.exports={
  getBoxesFilterByPrice
}