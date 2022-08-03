const { Router } = require("express");
const router = Router();
const Boxes = require("../../pruebaJson.json");

router.get("/", async (req, res) => {
  res.json(Boxes);
});

module.exports = router;
