const { Router } = require("express");
const router = Router();
const {
  createNewBox,
  getBox,
  getAllBoxes,
} = require("../controllers/boxControllers");

router.get("/", getAllBoxes);

router.get("/:id", getBox);

router.post("/", createNewBox);

module.exports = router;
