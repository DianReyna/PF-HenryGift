const { Router } = require("express");
const router = Router();
const {
  createNewBox,
  getBox,
  getAllBoxes,
  deleteBox,
  updateBox,
  getAdminBoxes,
} = require("../controllers/boxControllers");

router.get("/admin", getAdminBoxes);

router.get("/:id", getBox);

router.post("/", createNewBox);

router.delete("/:id", deleteBox);

router.put("/:id", updateBox);

module.exports = router;
