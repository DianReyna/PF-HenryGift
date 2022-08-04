const {Provider} = require("../database/index")

const getAllProviders = async()=>{

  let allProviders = await Provider.findAll({attributes: ['id', 'name','phone','address','email']})

  return allProviders

}

module.exports = {
  getAllProviders,
}