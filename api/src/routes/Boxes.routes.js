const { Router } = require("express");
const router = Router();
const {
  createNewBox,
  getBox,
  getAllBoxes,
} = require("../controllers/boxControllers");
<<<<<<< HEAD

router.get("/", getAllBoxes);

router.get("/:id", getBox);
=======
>>>>>>> acf1127371563015ff95998f9fecd1e0b65469ba

router.get("/", getAllBoxes);

<<<<<<< HEAD
=======
router.get("/:id", getBox);

>>>>>>> acf1127371563015ff95998f9fecd1e0b65469ba
router.post("/", createNewBox);

module.exports = router;
