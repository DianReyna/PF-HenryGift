const providerServices = require("../services/providerServices")

const getAllProviders = async(req,res)=>{

  try {

    const allProviders = await providerServices.getAllProviders()
    res.send(allProviders)
    
  } catch (error) {
    console.log(error)
  }

}

module.exports={
  getAllProviders
}