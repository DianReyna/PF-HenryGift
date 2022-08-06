const { Category, Box } = require("../database/index");
const { Op } = require("sequelize");

const FilterPerson = async (num) => {
  const box = await Box.findAll({
    where: {
      person: num,
    },
    include:{
      model: Category
    }
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

const getBoxesFilterByPrice = async (min,max) => {
  const boxFilteredByPrice = await Box.findAll({
    where: {
      price: {
        [Op.between]: [min, max]
      }
    },
    include:{
      model: Category
    }
  });
  return boxFilteredByPrice;
};

const getBoxesAllFilters = async (category, num, min, max) => {
  const allFilters = await Box.findAll({
    where: {
      person: num,
      price: {
        [Op.between] : [min,max]       
      }
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
  return allFilters;
};

const getBoxFilterPersonPrice = async (num, min, max) => {
  const box = await Box.findAll({
    where: {
      person: num,
      price: {
        [Op.between] : [min,max]       
      }
    },
    include:{
      model: Category
    }
  });
  return box;
};

const getBoxFilerCategoryPrice = async (category, min, max) => {
  const ambas = await Box.findAll({
    where: {
      price: {
        [Op.between] : [min,max]       
      }
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
  getBoxesFilterByPrice,
  getBoxesAllFilters,
  getBoxFilterPersonPrice,
  getBoxFilerCategoryPrice
};
