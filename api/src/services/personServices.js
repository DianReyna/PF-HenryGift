const { Category, Box } = require("../database/index");
const { Op } = require("sequelize");

const FilterPerson = async (num) => {
  const box = await Box.findAll({
    where: {
      person: num,
    },
  });
  return box;
};

const FilterCategory = async (category) => {
  const box = await Box.findAll({
    include: {
      model: Category,
      where: {
        name: {
          [Op.iLike]: `%${category}`,
        },
      },
    },
  });

  return box;
};

const Filterboth = async (category, num) => {
  const ambas = await Box.findAll({
    where: {
      person: num,
    },
    include: {
      model: Category,
      where: {
        name: {
          [Op.iLike]: `%${category}`,
        },
      },
    },
  });
  return ambas;
};

module.exports = {
  FilterPerson,
  FilterCategory,
  Filterboth,
};
