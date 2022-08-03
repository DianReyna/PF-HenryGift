const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");

router.use("/boxes", AllBoxes);

module.exports = router;
