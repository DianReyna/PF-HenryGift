const { Router } = require("express");
const router = Router();
const {
  createNewBox,
  getBox,
  getAllBoxes,
  deleteBox,
} = require("../controllers/boxControllers");

router.get("/", getAllBoxes);

router.get("/:id", getBox);

router.post("/", createNewBox);

router.delete("/:id", deleteBox);

module.exports = router;
