const { Router } = require("express");
const router = Router();
const Boxes = require("../../pruebaJson.json");
const { createNewBox } = require("../controllers/boxControllers");


router.get("/", async (req, res) => {
  res.json(Boxes);
});

router.post('/', createNewBox)

module.exports = router;
