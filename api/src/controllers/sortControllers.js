const sortServices = require("../services/sortServices");

const sortBoxes = async (req, res, next) => {
  const { col, dir } = req.query;
  try {
    const boxesSorted = await sortServices.sortBoxes(col,dir);
    
    res.send(boxesSorted);
  } catch (error) {
    next(error);
  }
};

module.exports={
  sortBoxes
}