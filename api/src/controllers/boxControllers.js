const { Box } = require("../database/index");

const createNewBox = async (req, res, next) => {
  const { name, price, ranking, expiration_date, detail, image, person } = req.body;
  try {
    const newBox = await Box.create({
      name,
      price,
      ranking,
      expiration_date,
      detail,
      image,
      person,
    });

    res.send(newBox);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewBox,
};
