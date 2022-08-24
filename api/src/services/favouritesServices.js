const { Favourite } = require("../database");
const { Box } = require("../database");

const newFavourite = async (query) => {
  const findFavorite = await Box.findOne({
    where: {
      id: query.box_id,
    },
  });
  const obj = {
    user_id: query.user_id,
    box_id: findFavorite.dataValues.id,
  };
  const newFavourite = await Favourite.create(obj);
  return newFavourite;
};

const findFavouritBox = async (box_id) => {
  const findFavourites = await Favourite.findOne({
    where: {
      box_id,
    },
  });
  return findFavourites;
};

const findFavourite = async (user_id) => {
  const findUser = await Favourite.findOne({
    where: {
      user_id,
    },
  });
  if (findUser) {
    const findFavourite = await Favourite.findAll({
      where: {
        user_id,
      },
      include: [{ model: Box }],
    });
    //console.log(findFavourite);
    return findFavourite;
  }
  return [];
};

const deleteFavourite = async (id) => {
  const deleteFavourite = await Favourite.destroy({
    where: {
      box_id: id,
    },
  });
  return deleteFavourite;
};

module.exports = {
  newFavourite,
  findFavouritBox,
  findFavourite,
  deleteFavourite,
};
