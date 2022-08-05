const {Category} = require("../database/index")



const categories = [
  {"name":"Cursos y Talleres"},
  {"name":"Gastronomia"},
  {"name":"Estadia"},
  {"name":"Aventura"},
  {"name":"Estar bien"},
  {"name":"Mix"}
]

async function loadMockCategories(){

  try {

    await Category.bulkCreate(categories)

   console.log("Categories loaded to DB")

  } catch (error) {
    console.log(error)
  }
}

module.exports={
  loadMockCategories
}