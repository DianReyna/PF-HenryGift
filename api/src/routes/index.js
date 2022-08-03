const express = require("express");
const router = express.Router();
const Boxes = require("../database");

router.get("/boxes", (req, res) => {
  res.json(Boxes);
});
module.exports = router;
