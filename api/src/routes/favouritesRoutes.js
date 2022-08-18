const router = require("express").Router();
const {
  createFavourite,
  findFavourite,
  deleteFavourite,
} = require("../controllers/favouritesControllers");

router.post("/", createFavourite);

router.get("/", findFavourite);

router.delete("/:id", deleteFavourite);

module.exports = router;
