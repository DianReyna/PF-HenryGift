const favouriteServices = require("../services/favouritesServices");

const createFavourite = async (req, res, next) => {
  const { query } = req;
  try {
    const createFavourite = await favouriteServices.newFavourite(query);
    if (createFavourite) {
      const findFavourites = await favouriteServices.findFavourites();

      res.status(201).send(findFavourites);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};

const findFavourite = async (req, res, next) => {
  //id = userId
  const { user_id } = req.query;
  try {
    const favourite = await favouriteServices.findFavourite(user_id);
    if (favourite) {
      res.status(201).send(favourite);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};

const deleteFavourite = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deleteFavourite = await favouriteServices.deleteFavourite(id);
    if (deleteFavourite) {
      res.status(201).send(id);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFavourite,
  findFavourite,
	deleteFavourite
};
