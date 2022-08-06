const personServices = require("../services/personServices.js");

const getFilter = async (req, res, next) => {
  const { num, category, min, max } = req.query;
  
  try {
   
    if (num && !category && !min && !max) {
      const person = await personServices.FilterPerson(num);
      return res.send(person);
    } 
    

    if (!num && category && !min && !max) {
      const categori = await personServices.FilterCategory(category);
      return res.send(categori);
    } 

    if (num && category && !min && !max) {
      const both = await personServices.Filterboth(category, num);
      return res.send(both);
    } 

    if(min && max && !num && !category){
      const price = await personServices.getBoxesFilterByPrice(min,max)
      return res.send(price)
    }

    if(num && category && min && max){
      const allFiltersAplied = await personServices.getBoxesAllFilters(category,num,min,max)
      return res.send(allFiltersAplied)
    }
    if(num && min && max && !category){
      const filterPersonPrice = await personServices.getBoxFilterPersonPrice(num, min ,max)
      return res.send(filterPersonPrice)
    }
    if(!num && min && max && category){
      const filterCategoryPrice = await personServices.getBoxFilerCategoryPrice(category, min, max)
      return res.send(filterCategoryPrice)
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFilter,
};
