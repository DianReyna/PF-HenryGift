const { Favourite } = require("../database");

const newFavourite = async (query) => {
  const newFavourite = await Favourite.create(query);
  return newFavourite;
};

const findFavourites = async () => {
  const findFavourites = await Favourite.findAll();
  return findFavourites;
};

const findFavourite = async (user_id) => {
  const findFavourite = await Favourite.findAll({
    where: {
      user_id,
    },
  });
  return findFavourite;
};

const deleteFavourite = async (id) => {
  const deleteFavourite = await Favourite.destroy({
    where: {
      id,
    },
  });
  return deleteFavourite;
};

module.exports = {
  newFavourite,
  findFavourites,
  findFavourite,
	deleteFavourite,
};
