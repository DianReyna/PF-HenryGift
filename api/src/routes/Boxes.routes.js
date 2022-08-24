const { Router } = require("express");
const router = Router();
const {
  createNewBox,
  getBox,
  getAllBoxes,
  deleteBox,
  updateBox,
  statusBox,
  getAdminBoxes,
} = require("../controllers/boxControllers");

router.get("/admin", getAdminBoxes);

router.get("/:id", getBox);

router.delete("/:id", deleteBox);

router.put("/:id", updateBox);

router.put("/status/:id", statusBox);

router.post("/", createNewBox);
module.exports = router;
