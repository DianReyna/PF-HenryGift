const personServices = require("../services/personServices.js");

const getFilter = async (req, res, next) => {
  const { num } = req.query;
  const { category } = req.query;

  try {
    const person = await personServices.FilterPerson(num);
    const categori = await personServices.FilterCategory(category);
    const both = await personServices.Filterboth(category, num);

    if (num && !category) {
      res.send(person);
    } else {
      res.send("Not found!");
    }

    if (!num && category) {
      res.send(categori);
    } else {
      res.send("Not found!");
    }

    if (num && category) {
      res.send(both);
    } else {
      res.send("Not found!");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFilter,
};
